import { User } from './user';
import { v4 as uuid } from 'uuid';


export const NewUser: User = { id: uuid(), name: ' ', mission: ' ', vision: ' ', strategy: ' ', kriterienList: []} ;
