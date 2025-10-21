import type { BibleVerse } from "./bible-api"

import genesisData from "./bible/genesis.json"
import exodusData from "./bible/exodus.json"
import leviticusData from "./bible/leviticus.json"
import numbersData from "./bible/numbers.json"
import deuteronomyData from "./bible/deuteronomy.json"
import joshuaData from "./bible/joshua.json"
import judgesData from "./bible/judges.json"
import ruthData from "./bible/ruth.json"
import samuel1Data from "./bible/1samuel.json"
import samuel2Data from "./bible/2samuel.json"
import kings1Data from "./bible/1kings.json"
import kings2Data from "./bible/2kings.json"
import chronicles1Data from "./bible/1chronicles.json"
import chronicles2Data from "./bible/2chronicles.json"
import ezraData from "./bible/ezra.json"
import nehemiahData from "./bible/nehemiah.json"
import estherData from "./bible/esther.json"
import jobData from "./bible/job.json"
import psalmsData from "./bible/psalms.json"
import psalms2Data from "./bible/psalms-2.json"
import proverbsData from "./bible/proverbs.json"
import ecclesiastesData from "./bible/ecclesiastes.json"
import songData from "./bible/song.json"
import isaiahData from "./bible/isaiah.json"
import jeremiahData from "./bible/jeremiah.json"
import lamentationsData from "./bible/lamentations.json"
import ezekielData from "./bible/ezekiel.json"
import danielData from "./bible/daniel.json"
import hoseaData from "./bible/hosea.json"
import joelData from "./bible/joel.json"
import amosData from "./bible/amos.json"
import obadiahData from "./bible/obadiah.json"
import jonahData from "./bible/jonah.json"
import micahData from "./bible/micah.json"
import nahumData from "./bible/nahum.json"
import habakkukData from "./bible/habakkuk.json"
import zephaniahData from "./bible/zephaniah.json"
import haggaiData from "./bible/haggai.json"
import zechariahData from "./bible/zechariah.json"
import malachiData from "./bible/malachi.json"

import matthewData from "./bible/matthew.json"
import markData from "./bible/mark.json"
import lukeData from "./bible/luke.json"
import johnData from "./bible/john.json"
import actsData from "./bible/acts.json"
import romansData from "./bible/romans.json"
import corinthians1Data from "./bible/1corinthians.json"
import corinthians2Data from "./bible/2corinthians.json"
import galatiansData from "./bible/galatians.json"
import ephesiansData from "./bible/ephesians.json"
import philippiansData from "./bible/philippians.json"
import colossiansData from "./bible/colossians.json"
import thessalonians1Data from "./bible/1thessalonians.json"
import thessalonians2Data from "./bible/2thessalonians.json"
import timothy1Data from "./bible/1timothy.json"
import timothy2Data from "./bible/2timothy.json"
import titusData from "./bible/titus.json"
import philemonData from "./bible/philemon.json"
import hebrewsData from "./bible/hebrews.json"
import jamesData from "./bible/james.json"
import peter1Data from "./bible/1peter.json"
import peter2Data from "./bible/2peter.json"
import john1Data from "./bible/1john.json"
import john2Data from "./bible/2john.json"
import john3Data from "./bible/3john.json"
import judeData from "./bible/jude.json"
import revelationData from "./bible/revelation.json"

export const BIBLE_DATA: Record<string, Record<number, BibleVerse[]>> = {}

function loadJSONData(jsonData: Record<string, Record<string, string>>): Record<number, BibleVerse[]> {
  const result: Record<number, BibleVerse[]> = {}

  for (const [chapterNum, verses] of Object.entries(jsonData)) {
    const chapterNumber = Number.parseInt(chapterNum)
    const versesArray: BibleVerse[] = []

    for (const [verseNum, text] of Object.entries(verses)) {
      versesArray.push({
        verse: Number.parseInt(verseNum),
        text: text,
      })
    }

    result[chapterNumber] = versesArray
  }

  return result
}

BIBLE_DATA.genesis = loadJSONData(genesisData as any)
BIBLE_DATA.exodus = loadJSONData(exodusData as any)
BIBLE_DATA.leviticus = loadJSONData(leviticusData as any)
BIBLE_DATA.numbers = loadJSONData(numbersData as any)
BIBLE_DATA.deuteronomy = loadJSONData(deuteronomyData as any)
BIBLE_DATA.joshua = loadJSONData(joshuaData as any)
BIBLE_DATA.judges = loadJSONData(judgesData as any)
BIBLE_DATA.ruth = loadJSONData(ruthData as any)
BIBLE_DATA["1samuel"] = loadJSONData(samuel1Data as any)
BIBLE_DATA["2samuel"] = loadJSONData(samuel2Data as any)
BIBLE_DATA["1kings"] = loadJSONData(kings1Data as any)
BIBLE_DATA["2kings"] = loadJSONData(kings2Data as any)
BIBLE_DATA["1chronicles"] = loadJSONData(chronicles1Data as any)
BIBLE_DATA["2chronicles"] = loadJSONData(chronicles2Data as any)
BIBLE_DATA.ezra = loadJSONData(ezraData as any)
BIBLE_DATA.nehemiah = loadJSONData(nehemiahData as any)
BIBLE_DATA.esther = loadJSONData(estherData as any)
BIBLE_DATA.job = loadJSONData(jobData as any)
BIBLE_DATA.psalms = {
  ...loadJSONData(psalmsData as any),
  ...loadJSONData(psalms2Data as any),
}
BIBLE_DATA.proverbs = loadJSONData(proverbsData as any)
BIBLE_DATA.ecclesiastes = loadJSONData(ecclesiastesData as any)
BIBLE_DATA.song = loadJSONData(songData as any)
BIBLE_DATA.isaiah = loadJSONData(isaiahData as any)
BIBLE_DATA.jeremiah = loadJSONData(jeremiahData as any)
BIBLE_DATA.lamentations = loadJSONData(lamentationsData as any)
BIBLE_DATA.ezekiel = loadJSONData(ezekielData as any)
BIBLE_DATA.daniel = loadJSONData(danielData as any)
BIBLE_DATA.hosea = loadJSONData(hoseaData as any)
BIBLE_DATA.joel = loadJSONData(joelData as any)
BIBLE_DATA.amos = loadJSONData(amosData as any)
BIBLE_DATA.obadiah = loadJSONData(obadiahData as any)
BIBLE_DATA.jonah = loadJSONData(jonahData as any)
BIBLE_DATA.micah = loadJSONData(micahData as any)
BIBLE_DATA.nahum = loadJSONData(nahumData as any)
BIBLE_DATA.habakkuk = loadJSONData(habakkukData as any)
BIBLE_DATA.zephaniah = loadJSONData(zephaniahData as any)
BIBLE_DATA.haggai = loadJSONData(haggaiData as any)
BIBLE_DATA.zechariah = loadJSONData(zechariahData as any)
BIBLE_DATA.malachi = loadJSONData(malachiData as any)

BIBLE_DATA.matthew = loadJSONData(matthewData as any)
BIBLE_DATA.mark = loadJSONData(markData as any)
BIBLE_DATA.luke = loadJSONData(lukeData as any)
BIBLE_DATA.john = loadJSONData(johnData as any)
BIBLE_DATA.acts = loadJSONData(actsData as any)
BIBLE_DATA.romans = loadJSONData(romansData as any)
BIBLE_DATA["1corinthians"] = loadJSONData(corinthians1Data as any)
BIBLE_DATA["2corinthians"] = loadJSONData(corinthians2Data as any)
BIBLE_DATA.galatians = loadJSONData(galatiansData as any)
BIBLE_DATA.ephesians = loadJSONData(ephesiansData as any)
BIBLE_DATA.philippians = loadJSONData(philippiansData as any)
BIBLE_DATA.colossians = loadJSONData(colossiansData as any)
BIBLE_DATA["1thessalonians"] = loadJSONData(thessalonians1Data as any)
BIBLE_DATA["2thessalonians"] = loadJSONData(thessalonians2Data as any)
BIBLE_DATA["1timothy"] = loadJSONData(timothy1Data as any)
BIBLE_DATA["2timothy"] = loadJSONData(timothy2Data as any)
BIBLE_DATA.titus = loadJSONData(titusData as any)
BIBLE_DATA.philemon = loadJSONData(philemonData as any)
BIBLE_DATA.hebrews = loadJSONData(hebrewsData as any)
BIBLE_DATA.james = loadJSONData(jamesData as any)
BIBLE_DATA["1peter"] = loadJSONData(peter1Data as any)
BIBLE_DATA["2peter"] = loadJSONData(peter2Data as any)
BIBLE_DATA["1john"] = loadJSONData(john1Data as any)
BIBLE_DATA["2john"] = loadJSONData(john2Data as any)
BIBLE_DATA["3john"] = loadJSONData(john3Data as any)
BIBLE_DATA.jude = loadJSONData(judeData as any)
BIBLE_DATA.revelation = loadJSONData(revelationData as any)

export function getBibleChapterData(bookId: string, chapter: number): BibleVerse[] | null {
  if (typeof window === "undefined") {
    return null
  }

  return BIBLE_DATA[bookId]?.[chapter] || null
}

export function getAvailableChapters(bookId: string): number[] {
  if (typeof window === "undefined") {
    return []
  }

  const book = BIBLE_DATA[bookId]
  if (!book) return []

  return Object.keys(book)
    .map(Number)
    .sort((a, b) => a - b)
}

export function isChapterAvailable(bookId: string, chapter: number): boolean {
  if (typeof window === "undefined") {
    return false
  }

  return !!BIBLE_DATA[bookId]?.[chapter]
}
