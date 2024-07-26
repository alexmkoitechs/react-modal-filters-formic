import { useState, useEffect } from "react";
import axios from "axios";
import { DNA } from 'react-loader-spinner';
import { REACT_APP_API_URL } from './constants';
import { createGlobalStyle } from "styled-components";

import Card from './components/Card';

import * as Styled from "./styled";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [realtyData, setRealtyData] = useState([]);

  const fetchRealtyData = async () => {
    try {
      const { data: { data: { items } } } = await axios(REACT_APP_API_URL);

      setRealtyData(items);
      setLoading(false);
    } catch (error) {
      console.log('Fetch error:', error)
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRealtyData()
  }, []);

  console.log('realtyData', realtyData)


  return (
    <Styled.Container>
      {/* <Styled.Header>
        <Button label="Filters" onClick={() => setIsModalOpen(true)} />
      </Styled.Header> */}

      <Styled.Cards>
        {realtyData?.map((card) => (<Card key={card.id} cardData={card} />))}
      </Styled.Cards>

      {/* <Modal {...{ isModalOpen, setIsModalOpen, applyFilters }} />
      <GlobalStyle /> */}
      <Styled.Loader>
        <DNA
          width="80"
          height="80"
          visible={loading}
          ariaLabel="dna-loading"
        />
      </Styled.Loader>

      <GlobalStyle />
    </Styled.Container>
  );
}

export default App;
