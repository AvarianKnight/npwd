import { Box, List, ListItem, ListItemButton } from '@mui/material';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { OwnedProperty } from '../../../../../typings/property';
import { PropertyState } from '../atoms/state';

type Props = {};

const Container = styled(Box)`
  width: 100%;
  position: relative;
  top: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Home = (props: Props) => {
  const ownedPropertyList = useRecoilValue(PropertyState.property);

  useEffect(() => {
    return () => {};
  }, []);

  const selectHome = (home: OwnedProperty) => {
    console.log('🚀 ~ file: Home.tsx ~ line 20 ~ selectHome ~ home', home);
  };

  return (
    <Container>
      <List sx={{ width: '100%', maxWidth: 350, overflow: 'auto', height: '365px' }}>
        {ownedPropertyList.map((listItem: OwnedProperty, index: number) => {
          return (
            <ListItem
              key={index}
              style={{
                color: '#DEBE4D',
                backgroundColor: 'rgb(248, 248, 248)',
                borderRadius: '10px',
                marginBottom: '10px',
                width: '330px',
              }}
              disablePadding
            >
              <ListItemButton dense onClick={() => selectHome(listItem)}>
                {listItem.label}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default Home;
