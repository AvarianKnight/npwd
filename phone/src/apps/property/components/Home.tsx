import { Box, List, ListItem, ListItemButton } from '@mui/material';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { OwnedProperty } from '../../../../../typings/property';
import { PropertyState } from '../atoms/state';
import { useProperty } from '../hooks/useProperty';

type Props = {};

const Container = styled(Box)`
  width: 100%;
  position: relative;
  top: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledListItem = styled(ListItem)`
  color: #debe4d;
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
  margin-bottom: 10px;
  width: 330px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Home = (props: Props) => {
  const ownedPropertyList = useRecoilValue(PropertyState.ownedPropertyList);
  const { propertySelector } = useProperty();

  useEffect(() => {
    return () => {};
  }, []);

  // const selectHome = (home: OwnedProperty) => {
  //   console.log('🚀 ~ file: Home.tsx ~ line 20 ~ selectHome ~ home', home);
  // };

  return (
    <Container>
      <List sx={{ width: '100%', maxWidth: 350, overflow: 'auto', height: '365px' }}>
        {ownedPropertyList.map((listItem: OwnedProperty, index: number) => {
          return (
            <StyledListItem key={index} disablePadding>
              <ListItemButton dense onClick={() => propertySelector(listItem)}>
                {listItem.label}
              </ListItemButton>
            </StyledListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default Home;
