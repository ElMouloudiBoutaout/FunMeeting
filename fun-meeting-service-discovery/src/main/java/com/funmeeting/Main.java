package com.funmeeting;

import java.util.HashMap;
import java.util.Map;

public class Main {


    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        throw new IllegalArgumentException("No two sum solution");
    }

    public static void main(String[] args) {

        System.out.println(twoSum(new int[]{2,7,11,15,19},9));

        Map mapA = Map.of(1,"a",2,"b",3,"c");

        Map mapB = Map.of(5,"a",6,"d",7,"c");


    }


}
