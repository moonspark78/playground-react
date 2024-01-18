import React, { useState } from 'react'

type Synonym = {
    word: string;
    score: Number;
}

export default function Synonyms() {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);






  return (
    <div>Synonyms</div>
  )
}
