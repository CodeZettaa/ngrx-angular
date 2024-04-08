
export interface Blog {
  id: number;
  seqNo:number;
  url:string;
  iconUrl: string;
  blogListIcon: string;
  description: string;
  longDescription?: string;
  category: string;
  lessonsCount: number;
  promo: boolean;
}


export function compareBlogs(c1:Blog, c2: Blog) {

  const compare = c1.seqNo - c2.seqNo;

  if (compare > 0) {
    return 1;
  }
  else if ( compare < 0) {
    return -1;
  }
  else return 0;

}
