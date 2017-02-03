
import java.util.Arrays;

public class SortedSearch {
    public static int countNumbers(int[] sortedArray, int lessThan) {
        if (sortedArray == null || sortedArray.length == 0) {
            return 0;
        }
        if (sortedArray[0] >= lessThan) {
            return 0;
        }
        if (sortedArray[sortedArray.length - 1] < lessThan) {
            return sortedArray.length;
        }
        
//        long count = Arrays.stream(sortedArray).filter(w -> w < lessThan).count();
//        return count;
        
        int minIndex = 0;
        int maxIndex = sortedArray.length - 1;
        int current = (maxIndex + minIndex)>>1;
//        int step = 1;
        while(!(sortedArray[current] < lessThan && sortedArray[current+1] >= lessThan)) {
            if (sortedArray[current] < lessThan) {
                minIndex = current;
            } else {
                maxIndex = current;
            }
            current = (maxIndex + minIndex)>>1;
//            step++;
        }
//        System.out.println(step);
        return current+1;
    }
    
    public static void main(String[] args) {
        System.out.println(SortedSearch.countNumbers(new int[] { 1, 3, 4, 5, 7, 9, 10, 11, 23,99, 222,3334,222343 }, 6));
    }
}