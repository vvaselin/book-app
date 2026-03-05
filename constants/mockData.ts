import type { UserBook, Shelf, Tag, ReadingStats } from '../types';

export const mockShelves: Shelf[] = [
  { id: '1', user_id: 'u1', name: '積読' },
  { id: '2', user_id: 'u1', name: 'SF' },
  { id: '3', user_id: 'u1', name: 'ファンタジー' },
  { id: '4', user_id: 'u1', name: 'ビジネス' },
  { id: '5', user_id: 'u1', name: '人文' },
];

export const mockTags: Tag[] = [
  { id: 't1', user_id: 'u1', name: 'また読みたい' },
  { id: 't2', user_id: 'u1', name: 'おすすめ' },
  { id: 't3', user_id: 'u1', name: '難しい' },
];

export const mockUserBooks: UserBook[] = [
  {
    id: 'ub1',
    user_id: 'u1',
    book_id: 'b1',
    status: 'reading',
    start_date: '2026-02-10',
    current_page: 250,
    book: {
      id: 'b1',
      isbn: '9784152093745',
      title: '三体',
      author: '劉 慈欣 / 大森 望（訳）',
      total_pages: 400,
      cover_url: undefined,
    },
    shelves: [{ id: '2', user_id: 'u1', name: 'SF' }],
    tags: [{ id: 't1', user_id: 'u1', name: 'また読みたい' }],
  },
  {
    id: 'ub2',
    user_id: 'u1',
    book_id: 'b2',
    status: 'reading',
    start_date: '2026-02-20',
    current_page: 70,
    book: {
      id: 'b2',
      title: '人は、なぜ本を読むのか',
      author: '齋藤 孝',
      total_pages: 200,
      cover_url: undefined,
    },
    shelves: [],
    tags: [],
  },
  {
    id: 'ub3',
    user_id: 'u1',
    book_id: 'b3',
    status: 'completed',
    start_date: '2026-01-05',
    end_date: '2026-01-28',
    rating: 5,
    one_liner: '人間の尊厳について深く考えさせられた一冊。',
    book: {
      id: 'b3',
      title: '夜と霧',
      author: 'V・E・フランクル',
      total_pages: 168,
      cover_url: undefined,
    },
    shelves: [{ id: '5', user_id: 'u1', name: '人文' }],
    tags: [{ id: 't2', user_id: 'u1', name: 'おすすめ' }],
  },
  {
    id: 'ub4',
    user_id: 'u1',
    book_id: 'b4',
    status: 'unread',
    book: {
      id: 'b4',
      isbn: '9784488711016',
      title: '星を継ぐもの',
      author: 'J・P・ホーガン',
      total_pages: 376,
      cover_url: undefined,
    },
    shelves: [{ id: '1', user_id: 'u1', name: '積読' }, { id: '2', user_id: 'u1', name: 'SF' }],
    tags: [],
  },
  {
    id: 'ub5',
    user_id: 'u1',
    book_id: 'b5',
    status: 'on_hold',
    start_date: '2025-12-01',
    book: {
      id: 'b5',
      title: 'ハーモニー',
      author: '伊藤 計劃',
      total_pages: 312,
      cover_url: undefined,
    },
    shelves: [{ id: '2', user_id: 'u1', name: 'SF' }],
    tags: [],
  },
  {
    id: 'ub6',
    user_id: 'u1',
    book_id: 'b6',
    status: 'completed',
    rating: 4,
    book: {
      id: 'b6',
      title: 'エレガントな宇宙',
      author: 'B・グリーン',
      total_pages: 480,
      cover_url: undefined,
    },
    shelves: [{ id: '2', user_id: 'u1', name: 'SF' }],
    tags: [{ id: 't2', user_id: 'u1', name: 'おすすめ' }],
  },
];

export const mockStats: ReadingStats = {
  reading: 3,
  completed: 47,
  unread: 12,
  completed_this_year: 8,
};
