import { Category } from '@typings/darkmarket';
import { darkMarketState } from './../atoms/state';
import { useRecoilState } from 'recoil';

export const useCategories = () => {
  const [selectedCategory, setSelectedCategory] = useRecoilState<Category>(
    darkMarketState.selectedCategory,
  );
  return { selectedCategory, setSelectedCategory };
};
