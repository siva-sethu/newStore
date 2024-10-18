import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {storeDetails} from '../../api';
import {Routes} from '../../navigation';
import {
  setStoreID,
  setStores,
  setSelectedStores,
} from '../../redux/slice/store';
import useAuth from '../use-auth';

export const useHomeFunction = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {stores} = useSelector(state => state.store);
  const {header} = useAuth();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBranchData = async () => {
      try {
        const {success, data} = await storeDetails(header);
        if (success) {
          setLoading(false);
          dispatch(setStores(data));
        }
      } catch (error) {
        setLoading(false);
      }
    };
    getBranchData();
  }, []);

  const handleSelect = async value => {
    dispatch(setSelectedStores(value));
    dispatch(setStoreID(value?._id));
    navigation.navigate(Routes.INSIDE_STACK, {screen: Routes.appservice});
  };

  return {
    dispatch,
    navigation,
    branchData: stores,
    loading,
    handleSelect,
  };
};
