function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let value = initial;

  const getValue = () => value;
  const setValue = (newValue: T) => (value = newValue);

  return [getValue, setValue];
}

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number,
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}
