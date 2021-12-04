import type { ActionFunction, LoaderFunction } from 'remix';
import { redirect } from 'remix';

import { logout } from '~/utils/session.server';

export const loader: LoaderFunction = () => redirect('/');

export const action: ActionFunction = ({ request }) => logout(request);
