import { useKeywordQuery } from "@src/components/Form/Keywords/useKeywordQuery";
import { capitalizeFirstLetter } from "@src/helper/utilities";
import { Keyword } from "@src/types";
import React, { useMemo } from "react";
import Select from "react-dropdown-select";

/**
 * TODO: pass this to the form somehow and figure out how to work with forms and react query
 */
const keywordSelected = (selectedKeywords: Keyword[]) => {
  const newSelected = (selectedKeywords = selectedKeywords
    .sort((a, b) => {
      return a.label > b.label ? -1 : 1;
    })
    .map((keyword: Keyword) => {
      if (keyword && typeof keyword === "object") {
        return {
          ...keyword,
          label: capitalizeFirstLetter(keyword.label),
          value: capitalizeFirstLetter(keyword.value),
        };
      }
      return {
        id: keyword,
        value: keyword,
        label: keyword,
      };
    }));
  return newSelected;
};

const formatKeywords = (keywords: string[]) => {
  return keywords.map((word: string) => {
    return { label: word, value: word };
  });
};

type Props = { selected: string[] };
function KeywordSelect({ selected }: Props) {
  const keywords = useKeywordQuery();

  if (keywords.isError) {
    // toast
  }

  const selectedKeywords: Keyword[] = useMemo(() => {
    return formatKeywords(selected);
  }, [selected]);

  const formattedKeywords: Keyword[] = useMemo(() => {
    if (!keywords.data) {
      return [];
    }
    return formatKeywords(keywords.data.data);
  }, [keywords.data]);

  return (
    <Select
      loading={keywords.isLoading}
      values={selectedKeywords}
      multi={true}
      options={formattedKeywords || []}
      onChange={keywordSelected}
      create={true}
    />
  );
}

export default KeywordSelect;
