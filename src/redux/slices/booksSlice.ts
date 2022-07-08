import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import axios from "../../axios";

export type Book = {
  
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publishedDate: string;
    description: string;
    pageCount: number;
    categories: string[];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    }
  }
}

type SearchParams = { 
  query: string; startIndex: number; maxResults: number; orderBy: string; category: string;
}


export const fetchBooksByParams = createAsyncThunk<Book[], SearchParams>('books/fetchBooksByParams', async (params) => {
  const {query, startIndex, maxResults, orderBy, category} = params;

  if (query.length === 0) return [];
  
  const {data} = await axios.
    get(`books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${orderBy}&printType=${category}&key=AIzaSyC9PnkUgkVtxsC8pAZmW01LL8tMhkOuF74`);
    return data.items;
})

export const getBooksCount = createAsyncThunk<number, SearchParams>('books/fetchBooksByParams', async (params) => {
  const {query, startIndex, maxResults, orderBy, category} = params;

  const {data} = await axios.
    get(`books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${orderBy}&printType=${category}&key=AIzaSyC9PnkUgkVtxsC8pAZmW01LL8tMhkOuF74`);
    return data.totalItems;
  

})
export enum Status{
  LOADING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface BooksSliceState {
  books: Book[];
  isBooksLoading: Status;

  query: string;
  category: string;
  sortBy: string;
  selectedPage: number;
  pageStep: number;
  totalItems: number;
}

const initialState: BooksSliceState = {
  books: [],
  isBooksLoading: Status.LOADING,
  query: 'js',
  category: 'all',
  sortBy: 'relevance',
  selectedPage: 1,
  pageStep: 40,
  totalItems: 0,
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>){
      state.category = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>){
      state.sortBy = action.payload;
    },
    setQuery(state, action: PayloadAction<string>){
      state.query = action.payload;
    },
    setSelectedPage(state, action: PayloadAction<number>){
      state.selectedPage = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBooksByParams.fulfilled, (state, action: PayloadAction<Book[]>) =>{
      state.books = action.payload;
      state.isBooksLoading = Status.SUCCESS;
    });
    builder.addCase(fetchBooksByParams.pending, (state) =>{
      state.isBooksLoading = Status.LOADING;
      state.books = [];
    });
    builder.addCase(fetchBooksByParams.rejected, (state) =>{
      state.isBooksLoading = Status.ERROR;
      state.books = [];
    });
  },
})

export const {setCategory, setSortBy, setQuery, setSelectedPage} = booksSlice.actions;

export default booksSlice.reducer;