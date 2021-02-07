import { fetchPost, fetchGet, fetchDelete, fetchPut, fetchUrl } from '@/api/axios'
/**获取*/
export function getList(data: SetData): Promise<ResData> {
  return fetchGet(`${fetchUrl.domain}get`, data)
}
