import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AddBookStackParamList } from "@src/navigation/navigationTypes";
import { Control } from "react-hook-form";

type CoverPreviewParams = {
  control: Control; 
  name: string;
}

type CoverPreviewRouteProps = RouteProp<{CoverPreview: CoverPreviewParams}>;

export interface CoverPreviewProps {
  route: CoverPreviewRouteProps
}

export type CoverNavigationProps = NativeStackNavigationProp<AddBookStackParamList, 'Cover'>;