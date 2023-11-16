function RandomComponent({ skeet, yeet }) {
    return (
      <img
        className="random"
        src={getImageUrl(skeet)}
        alt={skeet.name}
        width={yeet}
        height={yeet}
      />
    );
  }