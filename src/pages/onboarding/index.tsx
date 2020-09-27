import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getProfileThunk } from 'src/store/profile/thunk';
import BasicDetails from './basic-details';

const AdvisorOnboarding: React.FC = () => {
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(getProfileThunk())
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <>
      <BasicDetails />
    </>
  )
}

export default AdvisorOnboarding;