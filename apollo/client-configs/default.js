import { InMemoryCache } from 'apollo-cache-inmemory'

const GRAPHCMS_API = 'https://api-euwest.graphcms.com/v1/cjmi83q8227ho01b9abzzxgrw/master'
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiZWI2MWI2ZWUtOWVjOS00Mzk5LTkwMzItYjE3ZmFjMjg2MzRlIn0.sCN5lhrn2sBO1nnhJgpRyvde9B07IamkErjpPtyq3d4'

export default () => ({
  httpEndpoint: GRAPHCMS_API,
  getAuth: () => `Bearer ${token}`,
  cache: new InMemoryCache()
});