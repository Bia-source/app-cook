import React, { useEffect } from "react";
import { ViewProps } from "react-native";
import * as style from "./style";
import { useWindowDimensions } from "react-native";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { Text } from "react-native";

type DirectionType = "fade-out-x" | "fade-in-x" | "fade-out-y" | "fade-in-y";
type FadeAnimationProps = ViewProps & {
   children: React.ReactNode;
   direction: DirectionType
}

export function FadeAnimation({ children, direction, ...rest }: FadeAnimationProps) {
   const { width: displayWidth, height: displayHeight } = useWindowDimensions();

   const cardOffsetOut = useSharedValue(0);
   const cardOffsetIn = useSharedValue(direction === "fade-in-x" || direction === "fade-out-x" ? 1.25 * displayWidth : 1.25 * displayHeight);

   function showDirection(direction: DirectionType) {
      switch (direction) {
         case "fade-out-x":
            cardOffsetOut.value = withTiming(1.25 * displayWidth, { duration: 3000 });
            break;
         case "fade-in-x":
            cardOffsetIn.value = withTiming(10, { duration: 3000 });
            break;
         case "fade-out-y":
            cardOffsetOut.value = withTiming(3.25 * displayWidth, { duration: 3000 });
            break;
         case "fade-in-y":
            cardOffsetIn.value = withTiming(0, { duration: 2000 });
            break;
         default:
            break;
      }
   }

   const animatedStyle = useAnimatedStyle(() => {
      'worklet'
      return {
         transform: [
            {
               translateX: direction === "fade-in-x" || direction === "fade-in-y" ? cardOffsetIn.value
                  : direction === "fade-out-x" || direction === "fade-out-y" ? cardOffsetOut.value : 0,
            }
         ]
      }
   });

   const animatedNotification = useAnimatedStyle(() => {
      'worklet'
      return {
         transform: [
            {
               translateY: direction === "fade-in-x" || direction === "fade-in-y" ? cardOffsetIn.value
                  : direction === "fade-out-x" || direction === "fade-out-y" ? cardOffsetOut.value : 0,
            }
         ]
      }
   });

   useEffect(() => {
      showDirection(direction);
   }, [])
// 

   return (
      <style.AnimationContainer {...rest} style={direction === "fade-in-x" || direction === "fade-out-x" ? animatedStyle : animatedNotification}>
         {children}
      </style.AnimationContainer>
   )
}