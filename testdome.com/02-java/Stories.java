
import java.util.ArrayList;
import java.util.List;

public class Stories {
	public static int cNM(int n, int m) {
	   int ret = 1;
    	for (int i = 0; i < m; i++) {
	        ret = ret*(n-i)/(i+1);
	    }
	    return ret;
	}
	
    public static int combinations(int numberOfStories) {
    	if (numberOfStories <= 0) {
    		return 0;
    	}
    	
    	List<ApartmentTypeCounter> atcs = new ArrayList<ApartmentTypeCounter>();
    	
    	int maxApartments = numberOfStories;
    	int minApartments = numberOfStories / 2;
    	if (numberOfStories % 2 == 1) {
    		minApartments = minApartments + 1;
    	}
    	
    	for (int i = minApartments; i <=maxApartments; i++) {
    		int one = i;
    		int two = numberOfStories - i;
    		one = one - two;
    		ApartmentTypeCounter atc = new ApartmentTypeCounter();
    		atc.setOneStory(one);
    		atc.setTwoStory(two);
    		atcs.add(atc);
    	}
    	
    	int retVal = 0;
    	for (ApartmentTypeCounter atc : atcs) {
    		System.out.println(atc.getOneStory() + "--------------" + atc.getTwoStory() + "--------------------" + atc.combinations());
    		retVal = retVal + atc.combinations();
    	}
    	return retVal;
    }

    public static void main(String[] args) {
        System.out.println(combinations(15));
    }

}
class ApartmentTypeCounter{
	private int oneStory = 0;
	private int twoStory = 0;
	public int getOneStory() {
		return oneStory;
	}
	public void setOneStory(int oneStory) {
		this.oneStory = oneStory;
	}
	public int getTwoStory() {
		return twoStory;
	}
	public void setTwoStory(int twoStory) {
		this.twoStory = twoStory;
	}
	
	public int combinations(){
		if (oneStory == 0 || twoStory == 0) {
			return 1;
		}
		return Stories.cNM((oneStory+twoStory), twoStory);
	}
}

//1--------------7--------------------8
//3--------------6--------------------84
//5--------------5--------------------252
//7--------------4--------------------330
//9--------------3--------------------220
//11--------------2--------------------78
//13--------------1--------------------14
//15--------------0--------------------1
//987


