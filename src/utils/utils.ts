import { parse } from 'url';

export function getDomain(url: string): string {
  const hostname =  parse(url).hostname || '';
  const lastSlash = hostname.lastIndexOf('/');
   if (lastSlash !== -1) {
    return hostname.substring(0, lastSlash);
  } else {
    return hostname;
  }
}

export function move2Front(array: string[], ele: string): string[] {
  let result = [...array];
  result = result.filter((e) => e !== ele);
  if (result.length < array.length) {
    result.unshift(ele);
  }
  return result;
}
