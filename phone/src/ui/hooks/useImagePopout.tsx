import { useSetRecoilState } from 'recoil';
import { ImagePopout } from '../interface/InterfaceUI';
import { HoverState } from '../state/HoverState';

export const useImagePopout = () => {
  const setImagePopout = useSetRecoilState<ImagePopout | undefined>(HoverState.imagePopout);

  const mouseEnterHandler = (data: ImagePopout) => {
    console.log(data.element);
    setImagePopout({
      url: data.url,
      show: data.show,
      element: data.element,
    });
  };

  const mouseExitHandler = () => {
    setImagePopout(undefined);
  };

  return { mouseEnterHandler, mouseExitHandler };
};
