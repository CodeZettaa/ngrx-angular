

export interface Lesson {
    id: number;
    description: string;
    duration: string;
    seqNo: number;
    blogId: number;
}


export function compareLessons(l1:Lesson, l2: Lesson) {

  const compareblogs = l1.blogId - l2.blogId;

  if (compareblogs > 0) {
    return 1;
  }
  else if (compareblogs < 0){
    return -1;
  }
  else {
    return l1.seqNo - l2.seqNo;
  }

}
