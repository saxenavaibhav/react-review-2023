const book = {
  reviews: {
    goodReads: {
      reviewCount: 200,
    },
  },
};
function getTotalReviewsCount() {
  const goodReads = book.reviews.goodReads.reviewCount;
  const others = book.reviews.others?.reviewCount ?? 0;
  return goodReads + others;
}

console.log(getTotalReviewsCount());
