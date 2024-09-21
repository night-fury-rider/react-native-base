import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import {TAppDispatch, TRootState} from '$common/redux/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
