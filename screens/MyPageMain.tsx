import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  Color,
  FontFamily,
  Padding,
  Border,
  FontSize,
  StyleVariable,
} from "../GlobalStyles";

const MyPageMain = () => {
  return (
    <View style={styles.mypageMain}>
      <View style={[styles.bottomNav, styles.tooltipBorder]}>
        <View style={styles.contentFlexBox2}>
          <View style={[styles.tooltip, styles.tooltipBorder]}>
            <Image
              style={[styles.beakIcon, styles.beakIconPosition]}
              contentFit="cover"
              source={require("../assets/beak.png")}
            />
            <Image
              style={[styles.beakStrokeIcon, styles.beakIconPosition]}
              contentFit="cover"
              source={require("../assets/beak-stroke.png")}
            />
            <Text style={[styles.title, styles.titleTypo]} />
            <Text
              style={[styles.bodyText, styles.textTypo1]}
            >{`          `}</Text>
          </View>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <Image
            style={[styles.userIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user.png")}
          />
        </View>
      </View>
      <View style={[styles.mpWithdrawalButton, styles.buttonLayout]}>
        <Text style={[styles.text, styles.textTypo]}>탈퇴하기</Text>
      </View>
      <View style={[styles.mpLogoutButton, styles.buttonLayout]}>
        <Text style={[styles.text1, styles.textTypo]}>로그아웃</Text>
      </View>
      <View style={styles.mpContentFrame}>
        <View style={[styles.mpContent, styles.contentFlexBox]}>
          <Text style={[styles.text1, styles.textTypo]}>공지사항</Text>
          <Image
            style={styles.arrowIconLayout}
            contentFit="cover"
            source={require("../assets/arrow-right.png")}
          />
        </View>
        <View style={[styles.mpContent1, styles.contentFlexBox]}>
          <Text style={[styles.text1, styles.textTypo]}>알림설정</Text>
          <Image
            style={styles.arrowIconLayout}
            contentFit="cover"
            source={require("../assets/arrow-right.png")}
          />
        </View>
        <View style={[styles.mpContent1, styles.contentFlexBox]}>
          <Text style={[styles.text1, styles.textTypo]}>문의하기</Text>
          <Image
            style={styles.arrowIconLayout}
            contentFit="cover"
            source={require("../assets/arrow-right.png")}
          />
        </View>
        <View style={[styles.mpContent1, styles.contentFlexBox]}>
          <Text style={[styles.text1, styles.textTypo]}>버전정보</Text>
          <Text style={[styles.text6, styles.textTypo]}>1.0</Text>
        </View>
      </View>
      <View style={styles.mpBanner}>
        <Text style={[styles.text1, styles.textTypo]}>배너광고</Text>
      </View>
      <View style={[styles.mpProfileBox, styles.topNavPosition]}>
        <View style={styles.mpProfileWhitebox}>
          <View style={[styles.mpPhotoNicname, styles.contentFlexBox2]}>
            <Image
              style={styles.mpPhotoIcon}
              contentFit="cover"
              source={require("../assets/mp-photo.png")}
            />
            <View style={[styles.mpNickContent, styles.contentFlexBox2]}>
              <Text style={[styles.text8, styles.titleTypo]}>닉네임</Text>
              <Image
                style={[styles.arrowRightIcon3, styles.arrowIconLayout]}
                contentFit="cover"
                source={require("../assets/arrow-right1.png")}
              />
            </View>
          </View>
          <View style={[styles.mpProfileButtonContent, styles.contentFlexBox2]}>
            <View style={styles.profileFlexBox}>
              <Text style={[styles.text9, styles.textTypo1]}>프로필 편집</Text>
            </View>
            <View style={[styles.mpProfileModify, styles.profileFlexBox]}>
              <Text style={[styles.text9, styles.textTypo1]}>정보 수정</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.topNav, styles.topNavPosition]}>
        <View style={[styles.topNavContentFrame, styles.contentFlexBox]}>
          <Image
            style={styles.arrowIconLayout}
            contentFit="cover"
            source={require("../assets/arrow-back.png")}
          />
          <Text style={styles.plannie}>Plannie</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tooltipBorder: {
    borderStyle: "solid",
    alignItems: "center",
    backgroundColor: Color.backgroundDefaultDefault,
  },
  beakIconPosition: {
    height: 11,
    width: 11,
    left: "50%",
    bottom: -5,
    marginLeft: -5.2,
    position: "absolute",
  },
  titleTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.bodyStrong,
    fontWeight: "600",
  },
  textTypo1: {
    fontFamily: FontFamily.bodySmall,
    textAlign: "center",
    color: Color.colorBlack,
  },
  iconLayout: {
    marginLeft: 103,
    height: 35,
    width: 35,
  },
  buttonLayout: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_57xl,
    height: 50,
    width: 370,
    borderRadius: Border.br_8xs,
    left: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    lineHeight: 25,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.bodyStrong,
    fontWeight: "600",
  },
  contentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  topNavPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  contentFlexBox2: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIconLayout: {
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  profileFlexBox: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_xl,
    height: 27,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.borderDefaultDefault,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  beakIcon: {
    zIndex: 0,
  },
  beakStrokeIcon: {
    zIndex: 1,
  },
  title: {
    zIndex: 2,
    display: "none",
    lineHeight: 22,
    fontSize: FontSize.bodyStrong_size,
  },
  bodyText: {
    fontSize: FontSize.bodySmall_size,
    lineHeight: 20,
    zIndex: 3,
    display: "none",
  },
  tooltip: {
    borderRadius: StyleVariable.radius200,
    borderColor: Color.colorLightskyblue_200,
    borderWidth: 3,
    width: 37,
    height: 26,
    paddingHorizontal: StyleVariable.space300,
    paddingVertical: StyleVariable.space200,
    alignItems: "center",
  },
  userIcon: {
    overflow: "hidden",
  },
  bottomNav: {
    top: 845,
    left: -1,
    borderColor: Color.borderDefaultDefault,
    borderWidth: 1,
    width: 430,
    height: 82,
    paddingHorizontal: Padding.p_38xl,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  text: {
    color: Color.backgroundDefaultDefault,
  },
  mpWithdrawalButton: {
    top: 765,
    backgroundColor: "#4183f3",
  },
  text1: {
    color: Color.colorBlack,
    lineHeight: 25,
    fontSize: FontSize.size_lg,
  },
  mpLogoutButton: {
    top: 705,
    backgroundColor: Color.colorLightskyblue_100,
  },
  mpContent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  mpContent1: {
    marginTop: 30,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  text6: {
    color: "#999",
  },
  mpContentFrame: {
    top: 340,
    left: 40,
    width: 350,
    position: "absolute",
  },
  mpBanner: {
    top: 250,
    left: 14,
    paddingHorizontal: 166,
    paddingVertical: 17,
    height: 60,
    width: 400,
    backgroundColor: Color.borderDefaultDefault,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  mpPhotoIcon: {
    width: 60,
    height: 60,
  },
  text8: {
    fontSize: 20,
    lineHeight: 28,
  },
  arrowRightIcon3: {
    marginLeft: 170,
  },
  mpNickContent: {
    marginLeft: 35,
  },
  mpPhotoNicname: {
    width: 351,
    height: 60,
    justifyContent: "center",
  },
  text9: {
    lineHeight: 22,
    fontSize: FontSize.bodyStrong_size,
  },
  mpProfileModify: {
    marginLeft: 50,
  },
  mpProfileButtonContent: {
    marginTop: 20,
  },
  mpProfileWhitebox: {
    height: 130,
    paddingHorizontal: 24,
    paddingVertical: 11,
    borderRadius: Border.br_3xs,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.backgroundDefaultDefault,
  },
  mpProfileBox: {
    top: 80,
    backgroundColor: "#e7f1fe",
    height: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  plannie: {
    fontSize: FontSize.size_5xl,
    color: Color.colorLightskyblue_100,
    textAlign: "left",
    fontFamily: FontFamily.bodyStrong,
    fontWeight: "600",
  },
  topNavContentFrame: {
    width: 232,
  },
  topNav: {
    top: 0,
    height: 80,
    padding: Padding.p_6xl,
    backgroundColor: Color.backgroundDefaultDefault,
  },
  mypageMain: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.backgroundDefaultDefault,
  },
});

export default MyPageMain;
