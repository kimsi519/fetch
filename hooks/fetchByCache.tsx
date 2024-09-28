// src/hooks/fetchByCache.ts
const cache: { [url: string]: any } = {};

export async function fetchByCache(url: string) {
  // 캐시에 이미 데이터가 있는 경우 캐시된 데이터를 반환
  if (cache[url]) {
    return cache[url];
  }

  // 데이터가 없으면 fetch로 가져오고, 캐시에 저장
  const response = await fetch(url);
  const data = await response.json();
  cache[url] = data; // 캐시에 저장
  return data;
}
