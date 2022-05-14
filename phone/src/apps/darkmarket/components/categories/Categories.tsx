import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { darkMarketState } from '../../atoms/state';
import { useCategories } from '../../hooks/useCategories';

export const Categories = () => {
  const history = useHistory();
  const categoryList = useRecoilState(darkMarketState.categories);
  const { setSelectedCategory } = useCategories();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    const value = event.currentTarget.innerText;
    if (
      value === 'Rifles' ||
      value === 'Pistols' ||
      value === 'Shotguns' ||
      value === 'Automatics'
    ) {
      history.replace('/darkmarket');
      setSelectedCategory(categoryList[0][index]);
      setOpen(false);
    } else if (value === 'Trade') {
      history.push('/darkmarket/trade');
      setOpen(false);
    }
  };

  const handleClose = (event: React.MouseEvent<HTMLElement> | MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      categoryList[0].map((category: any) => {
        if (category.label === event.target) {
          setSelectedCategory(category);
          setOpen(false);
        }
        return category;
      });
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        View
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper
              style={{
                transform: 'translate(10px, -4px)',
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {categoryList[0].map((category: any, i: number) => {
                    return (
                      <MenuItem
                        key={i}
                        onClick={(event) => handleMenuClick(event, i)}
                        value={`${category.title}`}
                      >
                        {category.title}
                      </MenuItem>
                    );
                  })}
                  <MenuItem onClick={(event) => handleMenuClick(event, null)} value={'Trade'}>
                    Trade
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
