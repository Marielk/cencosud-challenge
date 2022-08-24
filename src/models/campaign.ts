export default interface Campaign {
  name: string,
  type: string,
  dates: string,
  chanel: string,
  promotions: number,
  flag: string,
  state: string,
  country: string,
  zone: string,
  stores: Array<string>,
  section: string
}