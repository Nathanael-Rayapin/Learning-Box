import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntitySelectors, EntityState } from '@ngrx/entity/src/models';
import { authAdapter, AuthState } from './auth.state';
import { User } from 'src/app/model/user/user.model';

// Call the Store we want use
export const getAuthState = createFeatureSelector<AuthState>('auth');

// Create the Entity and retrieve Users lists and length
export const {
  selectAll: selectAllUsers,
}: EntitySelectors<User, EntityState<User>> = authAdapter.getSelectors();

// Create Other Selectors
export const currentUser = (state: AuthState) => state.currentUser;
export const loading = (state: AuthState) => state.loading;
export const error = (state: AuthState) => state.error;

// Export Selectors
export const selectUsers = createSelector(getAuthState, selectAllUsers);
export const selectUser = createSelector(getAuthState, currentUser);
export const selectLoading = createSelector(getAuthState, loading);
export const selectError = createSelector(getAuthState, error);
