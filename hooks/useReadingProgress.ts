import type { UserBook } from '../types';

/**
 * 読書進捗を計算するユーティリティフック
 */
export function useReadingProgress(userBook: UserBook) {
  const { book, current_page } = userBook;

  const totalPages = book.total_pages ?? 0;
  const currentPage = current_page ?? 0;

  const progressPercent =
    totalPages > 0 ? Math.round((currentPage / totalPages) * 100) : 0;

  const remainingPages = Math.max(0, totalPages - currentPage);

  return {
    progressPercent,
    currentPage,
    totalPages,
    remainingPages,
  };
}
