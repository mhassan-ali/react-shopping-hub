export default function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={
            star <= Math.round(rating)
              ? "text-yellow-400 text-lg"
              : "text-gray-300 text-lg"
          }
        >
          ★
        </span>
      ))}
    </div>
  );
}