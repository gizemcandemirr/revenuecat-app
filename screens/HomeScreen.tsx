import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ActionRow from "../components/ActionRow";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 relative">
      <ScrollView>
        <TouchableOpacity className="absolute z-50 top-4 right-5 items-center">
          <Ionicons name="md-person-circle" size={30} color="#E5962D" />
          <Text className="text-center text-[#E5962D]">UPGRADE</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: "https://i.imgur.com/e14NE49.png" }}
          className="w-full h-64 mt-4"
        />
        <View className="mx-5">
           <View className="flex flex-row justify-between space-x-2">
          <ActionRow
            title="Track Workout"
            screen="Demo"
            color="#E5962D"
            icon="fitness"
            vertical
          />

          <ActionRow
            title="Browse Workouts"
            screen="Demo"
            color="#1982C4"
            icon="library"
            vertical
          />
          </View>

          <View>
          <ActionRow
            title="Connect Friends"
            screen="Demo"
            color="#F44174"
            icon="share-social"
            
          />

          <ActionRow
            title="Add an Exercise"
            screen="Demo"
            color="#8AC926"
            icon="add-circle"
            requiresPro
          />

          <ActionRow
            title="Create a Routine"
            screen="Demo"
            color="#C03221"
            icon="md-time"
            requiresPro
          />
          <ActionRow
            title="Join Challanges"
            screen="Demo"
            color="#23967F"
            icon="trophy"
            requiresPro
          />
        </View> 
        </View>
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
