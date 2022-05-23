import { Box, Divider, List, ListItem, Stack } from '@mui/material';
import styled from 'styled-components';
import { Vehicle } from '../../../../../../typings/bennys';
import { Button } from '../../../../ui/components/Button';
import { TextField } from '../../../../ui/components/Input';
import { useBennys } from '../../hooks/useBennys';
import { Notify } from '../notify/Notify';

const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
`;

const Home = () => {
  const { filterVehicleList, vehicleList, payImpound } = useBennys();

  const carLocation = (state: number, police_lock: string) => {
    if (state === 0) {
      return 'Location: Garage';
    } else if (state === 1) {
      return 'Location: City';
    } else if (state === 2) {
      return 'Location: Impound';
    } else if (state === 3) {
      return 'Location: Home';
    } else if (state === 4 && parseInt(police_lock) === 0) {
      return 'Location: PD Impound';
    } else if (state === 4 && police_lock) {
      const lock: string = police_lock + '000';
      return `Locked until: ${new Date(parseInt(lock)).toDateString()}`;
    }
  };

  return (
    <Wrapper>
      <Notify />
      <Box style={{ paddingBottom: 15, paddingLeft: 15 }}>
        <TextField
          id="standard-search"
          label="Search"
          type="search"
          variant="standard"
          style={{ fontSize: 12 }}
          onChange={(e) => filterVehicleList(e.currentTarget.value)}
        />
      </Box>
      <Box style={{ overflow: 'auto', height: '425px' }}>
        <List>
          {vehicleList?.map((veh: Vehicle, index: number) => {
            return (
              <Box key={index}>
                <ListItem
                  style={{ fontSize: 12, display: 'flex', justifyContent: 'space-between' }}
                >
                  <Stack>
                    <Box>Plate: {veh.plate}</Box>
                    <Box>Model: {veh.model}</Box>
                  </Stack>
                  <Box>{carLocation(veh.state, veh.police_lock)}</Box>
                  {veh.state === 2 || (veh.state === 4 && parseInt(veh.police_lock) === 0) ? (
                    <Box>
                      <Button onClick={() => payImpound(index)}>Pay</Button>
                    </Box>
                  ) : null}
                </ListItem>
                <Divider />
              </Box>
            );
          })}
        </List>
      </Box>
    </Wrapper>
  );
};

export default Home;
