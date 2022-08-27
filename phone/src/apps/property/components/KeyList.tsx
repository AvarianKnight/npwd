import {
  Box,
  IconButton,
  List,
  ListItem as MuiListItem,
  ListItemText as MuiListItemText,
} from '@mui/material';
import { useNuiRequest } from 'fivem-nui-react-lib';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { OwnedProperty, PropertyEvents } from '../../../../../typings/property';
import KeyRemovalImg from '../../../assets/property/key_removal.png';
import { PropertyState } from '../atoms/state';
import { useKey } from '../hooks/useKey';
import Title from './Title';

const KeyContainer = styled(Box)`
  padding: 10px;
  max-height: 330px;
  overflow: auto;
`;

const ListItem = styled(MuiListItem)`
  background-color: #fff;
`;

const ListItemText = styled(MuiListItemText)`
  color: #debe4d;
`;

const KeyList = () => {
  const { send } = useNuiRequest();
  const { deleteKeyHandler } = useKey();
  const selectedProperty = useRecoilValue(PropertyState.selectedProperty);
  const sharedKeyList = useRecoilValue(PropertyState.sharedKeyList);

  useEffect(() => {
    send(PropertyEvents.FETCH_KEY_HOLDERS, selectedProperty);
  }, []);

  return (
    <KeyContainer>
      <Title />
      <List>
        {sharedKeyList.map((key: OwnedProperty, index: number) => {
          return (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton onClick={() => deleteKeyHandler(index, sharedKeyList[index])}>
                  <img src={KeyRemovalImg} alt="key-removal" />
                </IconButton>
              }
            >
              <ListItemText primary={key.fullname} />
            </ListItem>
          );
        })}
      </List>
    </KeyContainer>
  );
};

export default KeyList;
