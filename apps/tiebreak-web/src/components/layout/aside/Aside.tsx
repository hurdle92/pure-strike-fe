import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Flex, Image, Spacer, Stack, Text, TextField } from "pure-strike-ui";
import {
  APP_STORE_LINK,
  PLAY_STORE_LINK,
  DYNAMIC_LINK,
} from "src/constants/link";
import { searchDefaultValue } from "./core/_models";
import { searchSchema } from "./core/_schema";

const Aside = () => {
  const {
    control,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: searchDefaultValue,
    resolver: yupResolver(searchSchema),
  });

  return (
    <aside>
      <Stack
        width={"512px"}
        height={"100vh"}
        position={"sticky"}
        top={"0px"}
        left={"0px"}
        display={["none", "block"]}
      >
        <Spacer height={"40px"} />
        <Link href={"/"}>
          <Image
            width={"280px"}
            height={"280px"}
            src={"/images/player.png"}
            borderRadius={"50%"}
            objectFit={"cover"}
          />
        </Link>
        <Spacer height={"40px"} />
        <Text typo={"Text28Bold"}>
          <span style={{ fontWeight: "400" }}>내 손안의 테니스장</span>
          <br />
          타이브레이크
        </Text>
        <Spacer height={"20px"} />
        <Text lineHeight={"1.5"}>
          테니스 코트 정보, 경기 매칭, 커뮤니티까지
          <br />내 주변에서 손쉽게 찾아봐요.
        </Text>
        <Spacer height={"16px"} />
        <Stack width={"342px"}>
          <TextField
            placeholder={"지역 및 코트명을 입력해주세요."}
            isAllowClear={true}
            controlKey={"keyword"}
            control={control}
            isError={errors.keyword}
          />
        </Stack>
        <Stack position={"absolute"} bottom={"30px"} height={"auto"}>
          <Flex gap={"8px"} alignment={"center"}>
            <Link href={APP_STORE_LINK} target={"_blank"}>
              <Image
                src={"/images/app_store.png"}
                width={"138px"}
                height={"60px"}
                objectFit={"cover"}
                borderRadius={"4px"}
              />
            </Link>
            <Link href={PLAY_STORE_LINK} target={"_blank"}>
              <Image
                src={"/images/play_store.png"}
                width={"138px"}
                height={"60px"}
                objectFit={"cover"}
                borderRadius={"4px"}
              />
            </Link>
            <Link href={DYNAMIC_LINK} target={"_blank"}>
              <Image
                src={"/images/qr_code.png"}
                width={"50px"}
                height={"50px"}
              />
            </Link>
          </Flex>
        </Stack>
      </Stack>
    </aside>
  );
};

export default Aside;
