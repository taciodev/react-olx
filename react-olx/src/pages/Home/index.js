import { React, useState, useEffect } from 'react';
import { PageContainer } from '../../components/MainComponents';
import { SearchArea, PageArea } from './styled';
import AdItem from '../../components/partials/AdItem';
import useApi from '../../helpers/OlxAPI';
import { Link } from 'react-router-dom';

const Page = () => {
  const api = useApi();

  const [ stateList, setStateList ] = useState([]);
  const [ categories, setCategories ] =  useState([]);
  const [ adList, setAdList ] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    }
    getStates();
  }, []);
  
  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    }
    getCategories();
  }, []);

  useEffect(() => {
    const getRecenteAds = async () => {
      const json = await api.getAds({
        sort:'desc',
        limit: 8
      });
      setAdList(json.ads);
    }
    getRecenteAds();
  }, []);

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className='searchBox'>
            <form method='GET' action='/ads'>
              <input 
                type='text' 
                name='q' 
                placeholder='O que você procura?' 
              />
              <select name='state'>
                <option></option>
                {stateList.map((item, key) => (
                  <option key={key} value={item._id}>{item.name}</option>
                ))}
              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className='categoryList'>
            {categories.map((item, key) => (
              <Link key={key} to={`/ads?cat=${item.slug}`} className='categoryItem'>
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

        </PageContainer>
      </SearchArea>

      <PageContainer>
        <PageArea>
          <h2>Anúncios Recentes</h2>
          <div className='list'>
            {adList.map((item, key) => (
              <AdItem key={key} data={item} />
            ))}
          </div>
          <Link to='/ads' className='seeAllLink'>Ver todos</Link>
          
          <hr />

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </PageArea>
      </PageContainer>
    </>
  );
}

export default Page;
