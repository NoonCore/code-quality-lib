# Code Quality Report

**Generated**: 2026-03-11T11:49:43.831Z
**Package Manager**: bun

---

## TypeScript

**Description**: Type checking and compilation

**Status**: ❌ **FAILED**

**Output**:
```
src/app/(events)/gacha/history/page.tsx(51,29): error TS2379: Argument of type '{ initialServer: number | undefined; initialCharacter: number | undefined; onSelectionChange: (character: Character | null) => void; }' is not assignable to parameter of type 'UseCharacterSelectionProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'initialServer' are incompatible.
    Type 'number | undefined' is not assignable to type 'number'.
      Type 'undefined' is not assignable to type 'number'.
src/app/(events)/gacha/history/page.tsx(190,33): error TS2532: Object is possibly 'undefined'.
src/app/(events)/gacha/page.tsx(47,10): error TS2375: Type '{ basePathCDN: string | undefined; gachaAmount: number; gachaPrice: number; reward: GachaPlayResponseItems[] | undefined; version: number | undefined; onClose: () => void; onPlayAgain: () => void; }' is not assignable to type 'GachaRewardViewProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'reward' are incompatible.
    Type 'GachaPlayResponseItems[] | undefined' is not assignable to type 'GachaPlayResponseItems[]'.
      Type 'undefined' is not assignable to type 'GachaPlayResponseItems[]'.
src/app/(events)/gacha/page.tsx(54,23): error TS2345: Argument of type '(prev: InterfaceConfig) => { reward: undefined; isLoading: false; event: { activityId: string | null; active: GachaListResponseInfo | null; }; ... 4 more ...; rewardIsRare?: boolean; }' is not assignable to parameter of type 'SetStateAction<InterfaceConfig>'.
  Type '(prev: InterfaceConfig) => { reward: undefined; isLoading: false; event: { activityId: string | null; active: GachaListResponseInfo | null; }; ... 4 more ...; rewardIsRare?: boolean; }' is not assignable to type '(prevState: InterfaceConfig) => InterfaceConfig'.
    Call signature return types '{ reward: undefined; isLoading: false; event: { activityId: string | null; active: GachaListResponseInfo | null; }; modal: { confirmGacha: boolean; detail: boolean; detailVideo: boolean; openGacha: boolean; guarantee: boolean; amount: boolean; }; skip: { ...; }; gachaAmount: number | null; gachaPrice: number | null;...' and 'InterfaceConfig' are incompatible.
      The types of 'reward' are incompatible between these types.
        Type 'undefined' is not assignable to type 'GachaPlayResponseItems[]'.
src/app/(events)/gacha/page.tsx(78,16): error TS2375: Type '{ basePathCDN: string | undefined; isSafari: boolean; slug: string | undefined; version: number | undefined; }' is not assignable to type 'Props' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'slug' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/app/(events)/gacha/page.tsx(104,18): error TS2375: Type '{ config: InterfaceConfig; dataCount: ApiResponse<GachaCountResponse> | undefined; description: string | undefined; handleGacha: (amount: number) => Promise<...>; hasCharacter: boolean; ingoreSlugs: string[]; setConfig: Dispatch<...>; updateModalConfig: (key: string, value: unknown) => void; }' is not assignable to type 'MobileGachaActionsProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'dataCount' are incompatible.
    Type 'ApiResponse<GachaCountResponse> | undefined' is not assignable to type '{ data?: { current_count: number; max_count: number; }; }'.
      Type 'undefined' is not assignable to type '{ data?: { current_count: number; max_count: number; }; }'.
src/app/(events)/gacha/page.tsx(128,18): error TS2375: Type '{ activeId: string | undefined; configGacha: IGachaContext | null; onSelectBanner: (item: GachaListResponseInfo, index: number) => void; }' is not assignable to type 'GachaThumbnailSwiperProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'activeId' are incompatible.
    Type 'string | undefined' is not assignable to type 'string | number | null'.
      Type 'undefined' is not assignable to type 'string | number | null'.
src/app/(events)/gacha/page.tsx(162,8): error TS2375: Type '{ isRare: boolean | undefined; show: boolean; }' is not assignable to type 'Props' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'isRare' are incompatible.
    Type 'boolean | undefined' is not assignable to type 'boolean'.
      Type 'undefined' is not assignable to type 'boolean'.
src/app/(events)/guild-fund/history/page.tsx(38,54): error TS2345: Argument of type '{ slug: HistoryType; name: string; content: Element; } | undefined' is not assignable to parameter of type 'Tabs | (() => Tabs)'.
  Type 'undefined' is not assignable to type 'Tabs | (() => Tabs)'.
src/app/(events)/guild-fund/history/page.tsx(44,19): error TS2345: Argument of type '{ slug: HistoryType; name: string; content: Element; } | undefined' is not assignable to parameter of type 'SetStateAction<Tabs>'.
  Type 'undefined' is not assignable to type 'SetStateAction<Tabs>'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(23,34): error TS7030: Not all code paths return a value.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(34,7): error TS2345: Argument of type 'GFSProductType | undefined' is not assignable to parameter of type 'GFSProductType'.
  Type 'undefined' is not assignable to type 'GFSProductType'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(57,17): error TS2322: Type 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(58,17): error TS2322: Type 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(59,17): error TS2322: Type 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(60,17): error TS2322: Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(64,17): error TS2322: Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(66,17): error TS2322: Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(67,17): error TS2322: Type 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(72,14): error TS2532: Object is possibly 'undefined'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(84,22): error TS2532: Object is possibly 'undefined'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(99,16): error TS2532: Object is possibly 'undefined'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(105,23): error TS2532: Object is possibly 'undefined'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(105,23): error TS2532: Object is possibly 'undefined'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(111,21): error TS2532: Object is possibly 'undefined'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(112,21): error TS2532: Object is possibly 'undefined'.
src/app/(events)/guild-fund/history/shop-detail-success/page.tsx(119,23): error TS2322: Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.
src/app/(events)/guild-fund/shop-detail-success/page.tsx(37,6): error TS2375: Type '{ characterRole: RoleKey; currentMileage: number; isExchangeShop: boolean; mileageReward: IGuildFundRewards | undefined; mutateReward: KeyedMutator<IGuildFundRewardsData>; openModal: (modal: ModalKey, item?: unknown) => void; purchasedData: IGuildFundPurchasedResponse; }' is not assignable to type 'IShopDetailSuccessWrapperProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'mileageReward' are incompatible.
    Type 'IGuildFundRewards | undefined' is not assignable to type 'IGuildFundRewards'.
      Type 'undefined' is not assignable to type 'IGuildFundRewards'.
src/app/(events)/treasure/[slug]/history/page.tsx(65,18): error TS2345: Argument of type 'IHistoryTab | undefined' is not assignable to parameter of type 'SetStateAction<IHistoryTab | null>'.
  Type 'undefined' is not assignable to type 'SetStateAction<IHistoryTab | null>'.
src/app/(events)/treasure/[slug]/history/page.tsx(101,14): error TS2375: Type '{ children: Element[]; activeKey: EHistoryType | undefined; className: string; id: string; role: "tablist"; variant: string; onSelect: (k: string | null) => void; }' is not assignable to type 'TabsProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'activeKey' are incompatible.
    Type 'import("/Users/noon/Work/tosm-activity/src/enums/events/treasure.enum").EHistoryType | undefined' is not assignable to type 'EventKey'.
      Type 'undefined' is not assignable to type 'EventKey'.
src/app/(events)/treasure/[slug]/lucky-user/page.tsx(6,1): error TS6133: 'React' is declared but its value is never read.
src/app/(events)/treasure/[slug]/shop/page.tsx(158,31): error TS2532: Object is possibly 'undefined'.
src/app/(events)/treasure/[slug]/treasure/page.tsx(189,19): error TS2345: Argument of type '(prev: IConfig) => { resultPosition: number; fakePosition: { position: number; fakeType: number; } | null | undefined; resultItem: ITreasurePlayResponseData | null; ... 9 more ...; isShowModalResetWheel: boolean; }' is not assignable to parameter of type 'SetStateAction<IConfig>'.
  Type '(prev: IConfig) => { resultPosition: number; fakePosition: { position: number; fakeType: number; } | null | undefined; resultItem: ITreasurePlayResponseData | null; ... 9 more ...; isShowModalResetWheel: boolean; }' is not assignable to type '(prevState: IConfig) => IConfig'.
    Call signature return types '{ resultPosition: number; fakePosition: { position: number; fakeType: number; } | null | undefined; resultItem: ITreasurePlayResponseData | null; isDuringAnimation: true; ... 8 more ...; isShowModalResetWheel: boolean; }' and 'IConfig' are incompatible.
      The types of 'fakePosition' are incompatible between these types.
        Type '{ position: number; fakeType: number; } | null | undefined' is not assignable to type '{ position: number; fakeType: number; } | null'.
          Type 'undefined' is not assignable to type '{ position: number; fakeType: number; } | null'.
src/app/(events)/treasure/[slug]/treasure/page.tsx(367,7): error TS2532: Object is possibly 'undefined'.
src/app/(events)/treasure/[slug]/treasure/page.tsx(368,36): error TS2532: Object is possibly 'undefined'.
src/app/(events)/treasure/[slug]/wheel/useWheelGame.ts(170,12): error TS18048: 'options' is possibly 'undefined'.
src/app/(events)/treasure/[slug]/wheel/useWheelGame.ts(170,47): error TS18048: 'options' is possibly 'undefined'.
src/app/(events)/treasure/[slug]/wheel/useWheelGame.ts(240,19): error TS2345: Argument of type '(prev: IWheelConfig) => { resultPosition: number; fakePosition: { position: number; fakeType: number; } | null | undefined; resultItem: ITreasurePlayResponseData | null; ... 9 more ...; isShowModalResetWheel: boolean; }' is not assignable to parameter of type 'SetStateAction<IWheelConfig>'.
  Type '(prev: IWheelConfig) => { resultPosition: number; fakePosition: { position: number; fakeType: number; } | null | undefined; resultItem: ITreasurePlayResponseData | null; ... 9 more ...; isShowModalResetWheel: boolean; }' is not assignable to type '(prevState: IWheelConfig) => IWheelConfig'.
    Call signature return types '{ resultPosition: number; fakePosition: { position: number; fakeType: number; } | null | undefined; resultItem: ITreasurePlayResponseData | null; isDuringAnimation: true; ... 8 more ...; isShowModalResetWheel: boolean; }' and 'IWheelConfig' are incompatible.
      The types of 'fakePosition' are incompatible between these types.
        Type '{ position: number; fakeType: number; } | null | undefined' is not assignable to type '{ position: number; fakeType: number; } | null'.
          Type 'undefined' is not assignable to type '{ position: number; fakeType: number; } | null'.
src/app/invite-friend/layout.tsx(14,3): error TS7027: Unreachable code detected.
src/app/invite-friend/layout.tsx(15,3): error TS7027: Unreachable code detected.
src/app/invite-friend/layout.tsx(17,3): error TS7027: Unreachable code detected.
src/app/invite-friend/layout.tsx(18,6): error TS2375: Type '{ children: (ReactNode | Element)[]; disableEndAt: string | undefined; disableStartAt: string | undefined; isTestMode: boolean; }' is not assignable to type '{ children: ReactNode; isTestMode: boolean; disableStartAt?: string; disableEndAt?: string; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'disableStartAt' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/app/invite-friend/open-box/page.tsx(166,12): error TS2375: Type '{ boxEffectByTier: number | undefined; handlePrefetchModal: () => void; items: { id: number; imageSrc: string; itemName: string; quantity: number; tier: 0 | 1 | 3 | 2 | 4; detail: string | null; }[]; openModalConfirmOpenBox: () => void; openModalConfirmOpenBoxOne: () => void; }' is not assignable to type '{ items: Omit<ItemCardProps, "exchangeableText">[]; openModalConfirmOpenBox: () => void; openModalConfirmOpenBoxOne: () => void; handlePrefetchModal: () => void; boxEffectByTier?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'boxEffectByTier' are incompatible.
    Type 'number | undefined' is not assignable to type 'number'.
      Type 'undefined' is not assignable to type 'number'.
src/app/layout.tsx(7,1): error TS6133: 'React' is declared but its value is never read.
src/app/not-found.tsx(1,1): error TS6133: 'React' is declared but its value is never read.
src/components/auth/TestUserAuthWrapper.tsx(18,74): error TS2379: Argument of type '{ isTestMode: boolean; disableStartAt: string | undefined; disableEndAt: string | undefined; }' is not assignable to parameter of type '{ isTestMode: boolean; disableStartAt?: string; disableEndAt?: string; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'disableStartAt' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/characters-leveling/DailyLoginSection.tsx(148,6): error TS2375: Type '{ children: Element; disableEndAt: string | undefined; disableStartAt: string | undefined; isTestMode: boolean; }' is not assignable to type '{ children: ReactNode; isTestMode: boolean; disableStartAt?: string; disableEndAt?: string; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'disableStartAt' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/common/DevelopmentTestPanel.tsx(3,8): error TS6133: 'React' is declared but its value is never read.
src/components/daily-login-cbt/molecules/CustomSelect.tsx(39,13): error TS7030: Not all code paths return a value.
src/components/daily-login-cbt/molecules/DevelopmentTestButtons.tsx(3,1): error TS6133: 'React' is declared but its value is never read.
src/components/daily-login-cbt/molecules/LoginCard.tsx(62,8): error TS2375: Type '{ children: string; className: string; disabled: boolean; onClick: (() => void) | undefined; }' is not assignable to type 'ButtonProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'onClick' are incompatible.
    Type '(() => void) | undefined' is not assignable to type '() => void'.
      Type 'undefined' is not assignable to type '() => void'.
src/components/daily-login-cbt/organisms/ClaimButton.tsx(11,8): error TS2375: Type '{ className: string; disabled: boolean; onClick: (() => void) | undefined; }' is not assignable to type 'ButtonProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'onClick' are incompatible.
    Type '(() => void) | undefined' is not assignable to type '() => void'.
      Type 'undefined' is not assignable to type '() => void'.
src/components/daily-login-cbt/organisms/LoginCardRow.tsx(24,10): error TS2375: Type '{ key: number; day: number; itemImage: string; items: { name: string; quantity: number; }[]; status: "active" | "inactive" | "completed"; useLocalImage: boolean; onClaim: () => void; onShowDetail: (() => void) | undefined; }' is not assignable to type 'LoginCardProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'onShowDetail' are incompatible.
    Type '(() => void) | undefined' is not assignable to type '() => void'.
      Type 'undefined' is not assignable to type '() => void'.
src/components/daily-login-cbt/templates/DailyLoginCBTTemplate.tsx(222,27): error TS2379: Argument of type '{ image: any; name: any; description: any; quantity: any; rarity: string; tier: number | undefined; }' is not assignable to parameter of type 'ItemDetailInfo' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'tier' are incompatible.
    Type 'number | undefined' is not assignable to type 'number'.
      Type 'undefined' is not assignable to type 'number'.
src/components/daily-login-cbt/templates/DailyLoginCBTTemplate.tsx(300,18): error TS2379: Argument of type '{ id: number; day: number; imageSrc: string; amount: string; name: string; bundleItems: { name: string; quantity: number; }[]; detail: string | undefined; isCheckedIn: boolean; isActive: boolean; isGold: boolean; }' is not assignable to parameter of type 'DailyItem' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'detail' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/daily-login-cbt/templates/DailyLoginCBTTemplate.tsx(483,6): error TS2375: Type '{ children: Element; disableEndAt: string | undefined; disableStartAt: string | undefined; isTestMode: false; }' is not assignable to type '{ children: ReactNode; isTestMode: boolean; disableStartAt?: string; disableEndAt?: string; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'disableStartAt' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/daily-login/atoms/CustomSelect.tsx(39,13): error TS7030: Not all code paths return a value.
src/components/daily-login/molecules/DevelopmentTestButtons.tsx(3,1): error TS6133: 'React' is declared but its value is never read.
src/components/daily-login/molecules/modals/ItemDetailsModal.tsx(2,8): error TS6133: 'React' is declared but its value is never read.
src/components/daily-login/molecules/modals/SuccessClaimModal.tsx(74,20): error TS2532: Object is possibly 'undefined'.
src/components/daily-login/molecules/modals/SuccessClaimModal.tsx(75,30): error TS2532: Object is possibly 'undefined'.
src/components/daily-login/organisms/Wrapper.tsx(54,9): error TS2375: Type '{ startAt: string | undefined; endAt: string | undefined; }' is not assignable to type '{ startAt?: string; endAt?: string; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'startAt' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/daily-login/organisms/Wrapper.tsx(71,6): error TS2375: Type '{ children: Element; disableEndAt: string | undefined; disableStartAt: string | undefined; isTestMode: false; }' is not assignable to type '{ children: ReactNode; isTestMode: boolean; disableStartAt?: string; disableEndAt?: string; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'disableStartAt' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/daily-login/templates/DailyLoginTemplate.tsx(5,8): error TS6133: 'React' is declared but its value is never read.
src/components/daily-login/templates/DailyLoginTemplate.tsx(110,5): error TS2322: Type '{ detail: string | undefined; name: string; thumbnailUrl: string; quantity: string; }[]' is not assignable to type '{ name: string; thumbnailUrl: string; quantity: string; detail?: string; }[]'.
  Type '{ detail: string | undefined; name: string; thumbnailUrl: string; quantity: string; }' is not assignable to type '{ name: string; thumbnailUrl: string; quantity: string; detail?: string; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'detail' are incompatible.
      Type 'string | undefined' is not assignable to type 'string'.
        Type 'undefined' is not assignable to type 'string'.
src/components/daily-login/templates/DailyLoginTemplate.tsx(277,18): error TS2379: Argument of type '{ id: number; day: number; imageSrc: string; amount: string; name: string; tier: number; detail: string | undefined; isCheckedIn: boolean; isActive: boolean; isGold: boolean; allItems: { name: string; thumbnailUrl: string; quantity: string; detail?: string; }[]; }' is not assignable to parameter of type 'DailyItem' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'detail' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/daily-login/templates/DailyLoginTemplate.tsx(371,6): error TS2375: Type '{ children: (false | Element)[]; disableEndAt: string | undefined; disableStartAt: string | undefined; isTestMode: false; }' is not assignable to type '{ children: ReactNode; isTestMode: boolean; disableStartAt?: string; disableEndAt?: string; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'disableStartAt' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/daily-login/templates/DailyLoginTemplate.tsx(386,9): error TS2322: Type '{ item: { id: number; name: string; thumbnail_url: string; }; quantity: number; tier: number | undefined; }[]' is not assignable to type 'RewardItem[]'.
  Type '{ item: { id: number; name: string; thumbnail_url: string; }; quantity: number; tier: number | undefined; }' is not assignable to type 'RewardItem' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'tier' are incompatible.
      Type 'number | undefined' is not assignable to type 'number'.
        Type 'undefined' is not assignable to type 'number'.
src/components/events/gacha/atoms/EventModal.tsx(24,6): error TS2375: Type '{ children: Element; centered: true; backdrop: boolean | "static" | undefined; className: string; id: string | undefined; show: boolean | undefined; size: "sm" | "lg" | "xl" | undefined; onHide: (() => void) | undefined; }' is not assignable to type 'ModalProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'size' are incompatible.
    Type '"sm" | "lg" | "xl" | undefined' is not assignable to type '"sm" | "lg" | "xl"'.
      Type 'undefined' is not assignable to type '"sm" | "lg" | "xl"'.
src/components/events/gacha/organisms/GachaModalsContainer.tsx(71,8): error TS2375: Type '{ basePathCDN: string | undefined; gachaAmount: number; gachaPrice: number; show: boolean; skipConfirm: boolean; version: number | undefined; onCancel: () => void; onConfirm: () => Promise<void>; onSkipConfirmChange: (checked: boolean) => void; }' is not assignable to type 'ModalGachaConfirmProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'basePathCDN' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/gacha/organisms/GachaModalsContainer.tsx(93,8): error TS2375: Type '{ basePathCDN: string | undefined; description: string | undefined; effect: string | undefined; element: string | undefined; isSafari: boolean; name: string | undefined; show: boolean; ... 5 more ...; onPlayVideo: () => void; }' is not assignable to type 'ModalGachaDetailProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'basePathCDN' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/gacha/organisms/GachaModalsContainer.tsx(156,8): error TS2375: Type '{ basePathCDN: string | undefined; show: boolean; slug: string | undefined; version: number | undefined; videoUrl: string | undefined; onClose: () => void; }' is not assignable to type 'ModalGachaVideoProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'slug' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/gacha/organisms/GachaModalsContainer.tsx(173,8): error TS2375: Type '{ basePathCDN: string | undefined; box: string | undefined; isIgnoredSlug: boolean; price: string | undefined; show: boolean; version: number | undefined; onClose: () => void; }' is not assignable to type 'ModalGachaGuaranteeProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'price' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/gacha/organisms/GachaModalsContainer.tsx(187,8): error TS2375: Type '{ basePathCDN: string | undefined; show: boolean; version: number | undefined; onClose: () => void; }' is not assignable to type 'ModalGachaAmountProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'basePathCDN' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/gacha/organisms/GachaModalsContainer.tsx(194,8): error TS2375: Type '{ basePathCDN: string | undefined; items: RateItem[]; show: boolean; version: number | undefined; onClose: () => void; }' is not assignable to type 'ModalGachaRateProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'basePathCDN' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/gacha/organisms/LeftColumn.tsx(117,17): error TS2379: Argument of type '{ startAt: string | undefined; endAt: string | undefined; }' is not assignable to parameter of type '{ startAt?: string; endAt?: string; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'startAt' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/gacha/organisms/LeftColumn.tsx(140,12): error TS2375: Type '{ basePathCDN: string | undefined; description: string | undefined; version: number | undefined; onClick: () => void; }' is not assignable to type 'DescriptionBoxProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'description' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/gacha/organisms/MobileGachaActions.tsx(80,12): error TS2375: Type '{ basePathCDN: string | undefined; current: number; isValidating: boolean; max: number; version: number | undefined; }' is not assignable to type 'CircularProgressProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'basePathCDN' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/gacha/organisms/MobileGachaActions.tsx(150,23): error TS2379: Argument of type '{ startAt: string | undefined; endAt: string | undefined; }' is not assignable to parameter of type '{ startAt?: string; endAt?: string; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'startAt' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/gacha/organisms/MobileGachaActions.tsx(192,18): error TS2375: Type '{ compact: true; basePathCDN: string | undefined; description: string | undefined; version: number | undefined; onClick: () => void; }' is not assignable to type 'DescriptionBoxProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'description' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/gacha/organisms/modals/ModalGachaDetail.tsx(60,16): error TS2375: Type '{ basePathCDN: string | undefined; isSafari: boolean; slug: string | undefined; version: number | undefined; }' is not assignable to type 'Props' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'slug' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/gacha/organisms/RightColumn.tsx(48,8): error TS2375: Type '{ children: Element; basePathCDN: string | undefined; current: number; isValidating: boolean; max: number; milestones: number[]; version: number | undefined; }' is not assignable to type 'CircularProgressProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'basePathCDN' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/gacha/organisms/Wrapper.tsx(109,13): error TS2322: Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.
src/components/events/general/MemberNavbar/index.tsx(82,18): error TS2375: Type '{ currencyContent: ReactNode; historyUrl: string | undefined; newsUrl: string | undefined; soundPath: string | undefined; onSoundOff: (() => void) | undefined; onSoundOn: (() => void) | undefined; }' is not assignable to type 'NavbarActionButtonsProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'historyUrl' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/general/modals/ButtonModalSelectCharacter/index.tsx(75,8): error TS2375: Type '{ children: Element[]; centered: true; backdrop: "static"; className: string | undefined; contentClassName: string | undefined; dialogClassName: string | undefined; show: boolean; onHide: () => void; }' is not assignable to type 'ModalProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'dialogClassName' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/general/modals/ModalCharacterNotFound/index.tsx(16,6): error TS2375: Type '{ children: Element[]; centered: true; backdrop: "static"; contentClassName: string | undefined; id: string; show: boolean; }' is not assignable to type 'ModalProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'contentClassName' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/general/modals/ModalGuide/index.tsx(56,6): error TS2375: Type '{ children: Element; key: number; centered: true; backdrop: "static"; className: string | undefined; show: boolean; size: "sm" | "lg" | "xl"; variant: string; onHide: () => void; }' is not assignable to type 'ModalProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'className' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/guild-fund/modal/ModalGuildRole.tsx(1,1): error TS6133: 'React' is declared but its value is never read.
src/components/events/guild-fund/modal/ModalShopModelError.tsx(1,1): error TS6133: 'React' is declared but its value is never read.
src/components/events/guild-fund/modal/ModalViewConditionPrize.tsx(1,1): error TS6133: 'React' is declared but its value is never read.
src/components/events/guild-fund/modal/ModalViewItems.tsx(42,24): error TS7030: Not all code paths return a value.
src/components/events/guild-fund/modal/ModalViewItems.tsx(228,16): error TS2532: Object is possibly 'undefined'.
src/components/events/guild-fund/modal/ModalViewItems.tsx(254,23): error TS2532: Object is possibly 'undefined'.
src/components/events/guild-fund/modal/ModalViewItems.tsx(254,23): error TS2532: Object is possibly 'undefined'.
src/components/events/guild-fund/modal/ModalViewItems.tsx(264,23): error TS2322: Type 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.
src/components/events/guild-fund/modal/ModalViewItems.tsx(267,23): error TS2322: Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.
src/components/events/guild-fund/molecules/BoxItemPrize.tsx(55,37): error TS2345: Argument of type '{}' is not assignable to parameter of type 'IGuildFundRewardsDetail | IGuildFundProductItem | IGuildFundItem | undefined'.
src/components/events/guild-fund/molecules/BoxItemPrize.tsx(80,57): error TS2345: Argument of type '{}' is not assignable to parameter of type 'IGuildFundRewardsDetail | IGuildFundProductItem | IGuildFundItem | undefined'.
src/components/events/guild-fund/molecules/BoxItemProduct.tsx(36,24): error TS7030: Not all code paths return a value.
src/components/events/guild-fund/molecules/BoxPointReceive.tsx(2,1): error TS6133: 'React' is declared but its value is never read.
src/components/events/guild-fund/molecules/HistoryTableDetail.tsx(17,28): error TS7030: Not all code paths return a value.
src/components/events/guild-fund/molecules/SucceededColumn.tsx(2,1): error TS6133: 'React' is declared but its value is never read.
src/components/events/guild-fund/organisms/Navbar.tsx(5,8): error TS6133: 'React' is declared but its value is never read.
src/components/events/guild-fund/pages/ShopDetailSuccessWrapper.tsx(2,8): error TS6133: 'React' is declared but its value is never read.
src/components/events/guild-fund/pages/ShopDetailSuccessWrapper.tsx(76,12): error TS2375: Type '{ currentMileage: number | undefined; item: IGuildFundItem | undefined; max: number; mutateReward: KeyedMutator<IGuildFundRewardsData> | undefined; openModal: (key: ModalKey, item?: unknown) => void; position: number; }' is not assignable to type 'IProgressSectionProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'currentMileage' are incompatible.
    Type 'number | undefined' is not assignable to type 'number'.
      Type 'undefined' is not assignable to type 'number'.
src/components/events/guild-fund/pages/ShopDetailSuccessWrapper.tsx(87,12): error TS2532: Object is possibly 'undefined'.
src/components/events/guild-fund/pages/ShopDetailSuccessWrapper.tsx(117,21): error TS2532: Object is possibly 'undefined'.
src/components/events/guild-fund/pages/ShopDetailSuccessWrapper.tsx(123,19): error TS2532: Object is possibly 'undefined'.
src/components/events/guild-fund/pages/ShopDetailSuccessWrapper.tsx(131,21): error TS2322: Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.
src/components/events/guild-fund/pages/ShopDetailWrapper.tsx(37,27): error TS7030: Not all code paths return a value.
src/components/events/guild-fund/pages/ShopDetailWrapper.tsx(169,16): error TS2532: Object is possibly 'undefined'.
src/components/events/guild-fund/pages/ShopDetailWrapper.tsx(195,23): error TS2532: Object is possibly 'undefined'.
src/components/events/guild-fund/pages/ShopDetailWrapper.tsx(195,23): error TS2532: Object is possibly 'undefined'.
src/components/events/guild-fund/pages/ShopDetailWrapper.tsx(205,23): error TS2322: Type 'number | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.
src/components/events/guild-fund/pages/ShopDetailWrapper.tsx(208,23): error TS2322: Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.
src/components/events/guild-fund/templates/GuildLayout.tsx(48,44): error TS7030: Not all code paths return a value.
src/components/events/guild-fund/templates/GuildLayout.tsx(63,17): error TS2345: Argument of type 'IGuildFundCharacterDatum | undefined' is not assignable to parameter of type 'IGuildFundCharacterDatum'.
  Type 'undefined' is not assignable to type 'IGuildFundCharacterDatum'.
src/components/events/guild-fund/utils.ts(30,20): error TS2532: Object is possibly 'undefined'.
src/components/events/guild-fund/utils.ts(30,20): error TS2532: Object is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(245,34): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(250,27): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(251,29): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(253,27): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(255,25): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(257,27): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(260,22): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(265,27): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(266,27): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(267,31): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(268,48): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(273,58): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(325,34): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(330,27): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(331,29): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(333,27): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(335,25): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(337,27): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(340,22): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(346,27): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(347,27): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(348,31): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(349,48): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(354,57): error TS18048: 'item' is possibly 'undefined'.
src/components/events/layout/molecules/EventNavbar/index.tsx(400,8): error TS2375: Type '{ modalGuideBodyClassName: string | undefined; modalGuideClassName: string | undefined; modalGuideImages: string[][]; modalGuideSize: "sm" | "lg" | "xl" | undefined; modalGuideTitle: Element | undefined; show: boolean; onClose: () => void; }' is not assignable to type 'IProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'modalGuideTitle' are incompatible.
    Type 'Element | undefined' is not assignable to type 'Element'.
      Type 'undefined' is not assignable to type 'ReactElement<any, any>'.
src/components/events/layout/organisms/EventLayout.tsx(67,13): error TS7030: Not all code paths return a value.
src/components/events/layout/organisms/EventLayout.tsx(166,10): error TS2375: Type '{ customMenuItems: EventMenubar[] | undefined; event: EventType | undefined; logo: ReactNode; menu: PartialMenuItem[] | undefined; ... 8 more ...; soundPath: string | undefined; }' is not assignable to type 'Props' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'event' are incompatible.
    Type 'EventType | undefined' is not assignable to type 'EventType'.
      Type 'undefined' is not assignable to type 'EventType'.
src/components/events/treasure/ayothaya/Common/ProductCard/BuyButton/Main.tsx(37,10): error TS2375: Type '{ className: string | undefined; gradientStart: string; gradientEnd: string; strokeColor: string; }' is not assignable to type 'FrameProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'className' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Common/ProductCard/BuyButton/PriceTag/Main.tsx(170,31): error TS2375: Type '{ price: string; amount: string; currency: "gold"; iconSrc: undefined; size: string; onCurrencyChange: undefined; onAmountChange: undefined; }' is not assignable to type 'PriceTagContextValue' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'iconSrc' are incompatible.
    Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Common/ProductCard/Main.tsx(114,8): error TS2375: Type '{ amount: string | undefined; disabled: boolean | undefined; onClick: () => void | undefined; }' is not assignable to type 'BuyButtonProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'amount' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Common/ProductCard/Main.tsx(135,7): error TS2375: Type '{ label: string; productImageSrc: string | undefined; }' is not assignable to type 'ProductCardContextValue' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'productImageSrc' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Common/ProductCard/Main.tsx(148,10): error TS2375: Type '{ buyButtonAmount: string | undefined; onBuyClick: (() => void) | undefined; disabled: boolean | undefined; }' is not assignable to type '{ buyButtonAmount?: string; onBuyClick?: () => void; disabled?: boolean; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'buyButtonAmount' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Common/Table/HistoryTable/Main.stories.tsx(139,34): error TS2322: Type 'Transaction | undefined' is not assignable to type 'Transaction'.
  Type 'undefined' is not assignable to type 'Transaction'.
src/components/events/treasure/ayothaya/Common/Table/HistoryTable/Main.tsx(118,11): error TS2375: Type '{ data: Transaction; className: string | undefined; currencyVariant: "gold"; }' is not assignable to type 'RowProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'className' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Common/Table/HistoryTable/Main.tsx(130,6): error TS2375: Type '{ className: string | undefined; pagination: { currentPage: number; totalPages: number; totalItems: number; itemsPerPage: number; hasNextPage: boolean; hasPreviousPage: boolean; }; onPageChange: (page: number) => void; disabled: boolean; showNavigation: false; }' is not assignable to type 'PaginationProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'className' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Common/Table/HistoryTable/Row.tsx(45,10): error TS2375: Type '{ data: Transaction; currencyVariant: "key" | "gold"; dateColor: string | undefined; timeColor: string | undefined; }' is not assignable to type 'HeaderProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'dateColor' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Common/Table/HistoryTable/Row.tsx(53,12): error TS2375: Type '{ key: number; data: Item; className: string | undefined; }' is not assignable to type 'SubRowProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'className' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Common/Table/HistoryTable/Row.tsx(79,14): error TS2375: Type '{ textColor: string; count: number; className: string | undefined; }' is not assignable to type 'SpinCountProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'className' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Common/Table/HistoryTable/Row.tsx(94,12): error TS2375: Type '{ value: string; dateColor: string | undefined; timeColor: string | undefined; className: string | undefined; }' is not assignable to type 'DateDisplayProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'className' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Common/Table/HistoryTable/SupComponents/CreditDisplay.tsx(1,8): error TS6133: 'React' is declared but its value is never read.
src/components/events/treasure/ayothaya/Common/Table/HistoryTable/SupComponents/SpinCount.tsx(1,8): error TS6133: 'React' is declared but its value is never read.
src/components/events/treasure/ayothaya/Common/Table/LuckyUserTable/Main.stories.tsx(156,34): error TS2322: Type 'LuckyUser | undefined' is not assignable to type 'LuckyUser'.
  Type 'undefined' is not assignable to type 'LuckyUser'.
src/components/events/treasure/ayothaya/Common/Table/LuckyUserTable/Main.tsx(142,6): error TS2375: Type '{ className: string | undefined; pagination: { currentPage: number; totalPages: number; totalItems: number; itemsPerPage: number; hasNextPage: boolean; hasPreviousPage: boolean; }; onPageChange: (page: number) => void; disabled: boolean; showNavigation: false; }' is not assignable to type 'PaginationProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'className' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Common/Table/LuckyUserTable/Row.tsx(70,14): error TS2375: Type '{ className: string; value: string; dateColor: string | undefined; timeColor: string | undefined; }' is not assignable to type 'DateDisplayProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'dateColor' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Common/Table/ShopTable/Main.stories.tsx(154,34): error TS2322: Type 'Product | undefined' is not assignable to type 'Product'.
  Type 'undefined' is not assignable to type 'Product'.
src/components/events/treasure/ayothaya/Common/Table/ShopTable/Main.tsx(92,8): error TS2375: Type '{ className: string | undefined; }' is not assignable to type '{ className?: string; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'className' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Common/Table/ShopTable/Main.tsx(161,6): error TS2375: Type '{ className: string | undefined; pagination: { currentPage: number; totalPages: number; totalItems: number; itemsPerPage: number; hasNextPage: boolean; hasPreviousPage: boolean; }; onPageChange: (page: number) => void; disabled: boolean; showNavigation: false; }' is not assignable to type 'PaginationProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'className' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Features/History/Tabs/TabButton.tsx(47,8): error TS2375: Type '{ className: string | undefined; gradientEnd: string; gradientStart: string; height: number; strokeColor: string; width: number; }' is not assignable to type 'FrameProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'className' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/Features/Shop/Main.tsx(13,12): error TS2375: Type '{ useDataHook: (options?: UseProductMockOptions) => UseProductMockReturn; className: string | undefined; }' is not assignable to type 'ShopTableProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'className' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/mocks/products.ts(134,3): error TS2322: Type 'Product | undefined' is not assignable to type 'Product'.
  Type 'undefined' is not assignable to type 'Product'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(138,28): error TS18048: 'transaction' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(175,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(175,36): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(176,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(176,39): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(177,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(177,39): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(178,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(178,38): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(185,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(185,39): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(186,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(186,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(187,9): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(187,9): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(189,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(189,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(190,9): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(190,9): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(198,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(199,9): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(201,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(202,9): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(212,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(212,45): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(213,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/history.service.test.ts(213,47): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(139,21): error TS18048: 'luckyUser' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(140,21): error TS18048: 'luckyUser' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(141,21): error TS18048: 'luckyUser' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(142,21): error TS18048: 'luckyUser' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(143,21): error TS18048: 'luckyUser' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(205,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(205,35): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(206,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(206,33): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(207,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(207,35): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(208,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(208,38): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(209,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(209,36): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(216,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(216,44): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(217,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(217,42): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(218,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(218,44): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(227,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(227,44): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(228,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(228,44): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(250,36): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts(251,34): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(193,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(193,29): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(194,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(194,35): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(195,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(195,32): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(196,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(196,39): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(197,14): error TS18048: 'first' is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(197,36): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(204,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(205,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(206,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(207,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(216,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(216,38): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(217,14): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(217,44): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(235,33): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/services/shop.service.test.ts(236,39): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/ayothaya/Templates/Main.stories.tsx(2,1): error TS6133: 'React' is declared but its value is never read.
src/components/events/treasure/ayothaya/UI/Badges/Rarity.stories.tsx(2,1): error TS6133: 'React' is declared but its value is never read.
src/components/events/treasure/ayothaya/UI/CurrencyBox/CurrencyBox.tsx(39,3): error TS2375: Type '{ amount: string; currency: CurrencyType; onCurrencyChange: CurrencyChangeHandler | undefined; }' is not assignable to type 'CurrencyBoxContextValue' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'onCurrencyChange' are incompatible.
    Type 'CurrencyChangeHandler | undefined' is not assignable to type 'CurrencyChangeHandler'.
      Type 'undefined' is not assignable to type 'CurrencyChangeHandler'.
src/components/events/treasure/ayothaya/UI/CurrencyIcon/CurrencyIcon.stories.tsx(2,1): error TS6133: 'React' is declared but its value is never read.
src/components/events/treasure/ayothaya/UI/MainButton/MainButton.stories.tsx(2,1): error TS6133: 'React' is declared but its value is never read.
src/components/events/treasure/ayothaya/UI/MainButton/MainButton.tsx(30,8): error TS2375: Type '{ className: string | undefined; gradientEnd: string; gradientStart: string; height: number; strokeColor: string; width: number; }' is not assignable to type 'FrameProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'className' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/utils/formatDate.ts(177,31): error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.
src/components/events/treasure/ayothaya/utils/formatNumber.ts(53,28): error TS18048: 'integerPart' is possibly 'undefined'.
src/components/events/treasure/modals/ModalShopConfirm.tsx(73,17): error TS2532: Object is possibly 'undefined'.
src/components/events/treasure/modals/ModalShopConfirm.tsx(104,14): error TS2375: Type '{ classNameForP: string; classNameForSpan: string; message: string | undefined; }' is not assignable to type 'IProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'message' are incompatible.
    Type 'string | undefined' is not assignable to type 'string | null'.
      Type 'undefined' is not assignable to type 'string | null'.
src/components/events/treasure/Wrapper.tsx(58,11): error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.
src/components/general/Loader.tsx(60,10): error TS2375: Type '{ animation: "border"; role: "status"; variant: "light" | undefined; }' is not assignable to type 'SpinnerProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'variant' are incompatible.
    Type '"light" | undefined' is not assignable to type 'Variant'.
      Type 'undefined' is not assignable to type 'Variant'.
src/components/general/modal/ModalNoCharacter.tsx(1,1): error TS6133: 'React' is declared but its value is never read.
src/components/invite-friend/layouts/FooterInviteFriend.tsx(2,1): error TS6133: 'React' is declared but its value is never read.
src/components/invite-friend/layouts/NavbarInviteFriend.tsx(6,8): error TS6133: 'React' is declared but its value is never read.
src/components/invite-friend/ModalErrorRedeemCode.tsx(1,1): error TS6133: 'React' is declared but its value is never read.
src/components/invite-friend/ModalSocialEvent.tsx(1,1): error TS6133: 'React' is declared but its value is never read.
src/components/invite-friend/ModalSuccessRedeemCode.tsx(1,1): error TS6133: 'React' is declared but its value is never read.
src/components/invite-friend/molecules/SocialButtonGroup.tsx(2,8): error TS6133: 'React' is declared but its value is never read.
src/components/invite-friend/organisms/GachaSection.tsx(5,8): error TS6133: 'React' is declared but its value is never read.
src/components/invite-friend/organisms/GachaSection.tsx(55,10): error TS2375: Type '{ characters: GetCharactersResponse | undefined; serverList: Servers[] | undefined; onSelectionChange: (serverId: number, familyId: number) => void; }' is not assignable to type 'SwalContentSelectCharacterProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'characters' are incompatible.
    Type 'GetCharactersResponse | undefined' is not assignable to type 'Character[]'.
      Type 'undefined' is not assignable to type 'Character[]'.
src/components/invite-friend/organisms/GachaSection.tsx(117,8): error TS2375: Type '{ message: string | undefined; show: boolean; onHide: () => void; }' is not assignable to type 'ModalErrorProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'message' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/invite-friend/organisms/InviteFriendsBox.tsx(34,26): error TS2352: Conversion of type 'ApiResponse<{ success: boolean; }>' to type '{ data?: { inviter: unknown; }; message?: string; }' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Types of property 'data' are incompatible.
    Property 'inviter' is missing in type '{ success: boolean; }' but required in type '{ inviter: unknown; }'.
src/components/invite-friend/organisms/InviteFriendsBox.tsx(56,36): error TS7030: Not all code paths return a value.
src/components/invite-friend/organisms/MileStoneSection.tsx(3,8): error TS6133: 'React' is declared but its value is never read.
src/components/invite-friend/organisms/MileStoneSection.tsx(27,27): error TS2532: Object is possibly 'undefined'.
src/components/invite-friend/organisms/MileStoneSection.tsx(42,27): error TS18048: 'previousMilestone' is possibly 'undefined'.
src/components/invite-friend/organisms/MileStoneSection.tsx(43,26): error TS18048: 'previousMilestone' is possibly 'undefined'.
src/components/layouts/MainLayout.tsx(2,1): error TS6133: 'React' is declared but its value is never read.
src/components/layouts/Navbar.tsx(6,8): error TS6133: 'React' is declared but its value is never read.
src/components/presale/atoms/Button.tsx(128,8): error TS2375: Type '{ children: Element; type?: string | undefined; replace?: boolean; dir?: string | undefined; ref?: Ref<HTMLAnchorElement> | undefined; referrerPolicy?: HTMLAttributeReferrerPolicy | undefined; ... 289 more ...; href: Url; }' is not assignable to type 'LinkProps<any>' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'onClick' are incompatible.
    Type 'MouseEventHandler<HTMLAnchorElement> | undefined' is not assignable to type 'MouseEventHandler<HTMLAnchorElement>'.
      Type 'undefined' is not assignable to type 'MouseEventHandler<HTMLAnchorElement>'.
src/components/presale/atoms/CustomSelect.tsx(27,35): error TS2532: Object is possibly 'undefined'.
src/components/presale/atoms/CustomSelect.tsx(38,35): error TS2532: Object is possibly 'undefined'.
src/components/presale/atoms/CustomSelect.tsx(75,5): error TS6133: 'optionLabel' is declared but its value is never read.
src/components/presale/atoms/ItemBox.tsx(66,10): error TS2375: Type '{ children: Element; className: string; dataBsTarget: string; dataBsToggle: string; onClick: (() => void) | undefined; }' is not assignable to type 'ButtonProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'onClick' are incompatible.
    Type '(() => void) | undefined' is not assignable to type '(event: MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void'.
      Type 'undefined' is not assignable to type '(event: MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void'.
src/components/presale/atoms/LoadingBadge.tsx(40,13): error TS7030: Not all code paths return a value.
src/components/presale/molecules/board/BoardCell.tsx(4,1): error TS6133: 'React' is declared but its value is never read.
src/components/presale/molecules/board/BoardCell.tsx(178,20): error TS2532: Object is possibly 'undefined'.
src/components/presale/molecules/BoxOpenItem.tsx(4,1): error TS6133: 'React' is declared but its value is never read.
src/components/presale/molecules/history/Pagination.tsx(1,1): error TS6133: 'React' is declared but its value is never read.
src/components/presale/molecules/history/tabs/MysticalShopTab.tsx(4,8): error TS6133: 'React' is declared but its value is never read.
src/components/presale/molecules/SectionHeaderCenterColumn.tsx(126,12): error TS2375: Type '{ className: string; disabled: boolean | undefined; text: string; type: "button"; onClick: () => void; }' is not assignable to type 'ButtonProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'disabled' are incompatible.
    Type 'boolean | undefined' is not assignable to type 'boolean'.
      Type 'undefined' is not assignable to type 'boolean'.
src/components/presale/molecules/WalkButton.tsx(4,1): error TS6133: 'React' is declared but its value is never read.
src/components/presale/organisms/history/HistoryContent.tsx(3,1): error TS6133: 'React' is declared but its value is never read.
src/components/presale/organisms/MilestoneProgress.tsx(3,1): error TS6133: 'React' is declared but its value is never read.
src/components/presale/organisms/MilestoneProgress.tsx(131,13): error TS2375: Type '{ product_id: string; quantity: number; server_id: string | number | undefined; character_id: string | number | undefined; }' is not assignable to type 'PurchaseRequestPayload' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'server_id' are incompatible.
    Type 'string | number | undefined' is not assignable to type 'string | number'.
      Type 'undefined' is not assignable to type 'string | number'.
src/components/presale/organisms/modals/board/BoardModals.tsx(97,8): error TS2769: No overload matches this call.
  Overload 1 of 2, '(props: ModalWalkResultProps, context?: any): string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | ... 4 more ... | undefined', gave the following error.
    Type '{ boardNumber: number; expiryDate: string; height: number; isWalking: boolean; position: number; presaleSP: number | undefined; rewards: readonly [{ readonly type: "tp"; readonly image: "tp.png"; readonly quantity: 33; readonly name: "TP"; }, { ...; }, { ...; }] | WalkReward[]; ... 6 more ...; onWalkAgain: () => voi...' is not assignable to type 'ModalWalkResultProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'presaleSP' are incompatible.
        Type 'number | undefined' is not assignable to type 'number'.
          Type 'undefined' is not assignable to type 'number'.
  Overload 2 of 2, '(props: ModalWalkResultProps): string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | ... 4 more ... | undefined', gave the following error.
    Type '{ boardNumber: number; expiryDate: string; height: number; isWalking: boolean; position: number; presaleSP: number | undefined; rewards: readonly [{ readonly type: "tp"; readonly image: "tp.png"; readonly quantity: 33; readonly name: "TP"; }, { ...; }, { ...; }] | WalkReward[]; ... 6 more ...; onWalkAgain: () => voi...' is not assignable to type 'ModalWalkResultProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'presaleSP' are incompatible.
        Type 'number | undefined' is not assignable to type 'number'.
          Type 'undefined' is not assignable to type 'number'.
src/components/presale/organisms/modals/box/BoxModals.tsx(355,10): error TS2375: Type '{ boxType: BoxType; isOpen: true; quantity: number; onBuyMore: (() => void) | undefined; onClose: () => void; onOpenOne: () => Promise<void>; onOpenTen: () => Promise<void>; }' is not assignable to type 'ModalOpenBoxProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'onBuyMore' are incompatible.
    Type '(() => void) | undefined' is not assignable to type '() => void'.
      Type 'undefined' is not assignable to type '() => void'.
src/components/presale/organisms/modals/box/BoxModals.tsx(381,10): error TS2769: No overload matches this call.
  Overload 1 of 2, '(props: ModalOpenBoxResultProps, context?: any): string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | ... 4 more ... | undefined', gave the following error.
    Type '{ boxType: BoxType; error: string | null; expiryDate: string; isOpen: true; openType: OpenType; quantityOpened: number | undefined; remainingBoxes: number; rewards: any[]; onClearError: () => void; onClose: () => void; onOpenAgain: () => void; }' is not assignable to type 'ModalOpenBoxResultProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'quantityOpened' are incompatible.
        Type 'number | undefined' is not assignable to type 'number'.
          Type 'undefined' is not assignable to type 'number'.
  Overload 2 of 2, '(props: ModalOpenBoxResultProps): string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | ... 4 more ... | undefined', gave the following error.
    Type '{ boxType: BoxType; error: string | null; expiryDate: string; isOpen: true; openType: OpenType; quantityOpened: number | undefined; remainingBoxes: number; rewards: any[]; onClearError: () => void; onClose: () => void; onOpenAgain: () => void; }' is not assignable to type 'ModalOpenBoxResultProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'quantityOpened' are incompatible.
        Type 'number | undefined' is not assignable to type 'number'.
          Type 'undefined' is not assignable to type 'number'.
src/components/presale/organisms/modals/box/BoxModals.tsx(397,10): error TS2375: Type '{ boxType: BoxType; isOpen: boolean; onBuy: (() => void) | undefined; onClose: () => void; }' is not assignable to type 'ModalOpenBoxErrorProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'onBuy' are incompatible.
    Type '(() => void) | undefined' is not assignable to type '() => void'.
      Type 'undefined' is not assignable to type '() => void'.
src/components/presale/organisms/modals/box/ModalBeforeOpenBox.tsx(57,13): error TS7030: Not all code paths return a value.
src/components/presale/organisms/modals/box/ModalOpenBox.tsx(3,1): error TS6133: 'React' is declared but its value is never read.
src/components/presale/organisms/modals/box/ModalOpenBoxResult.tsx(70,58): error TS18048: 'reward' is possibly 'undefined'.
src/components/presale/organisms/modals/box/ModalOpenBoxResult.tsx(75,30): error TS18048: 'reward' is possibly 'undefined'.
src/components/presale/organisms/modals/box/ModalOpenBoxResult.tsx(78,53): error TS18048: 'reward' is possibly 'undefined'.
src/components/presale/organisms/modals/box/ModalShop.tsx(101,39): error TS7030: Not all code paths return a value.
src/components/presale/organisms/modals/box/ModalShop.tsx(131,25): error TS7030: Not all code paths return a value.
src/components/presale/organisms/modals/box/ModalShop.tsx(210,16): error TS2375: Type '{ "aria-label": string; className: string; disabled: boolean; onClick: (() => void) | undefined; }' is not assignable to type 'ButtonProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'onClick' are incompatible.
    Type '(() => void) | undefined' is not assignable to type '(event: MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void'.
      Type 'undefined' is not assignable to type '(event: MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void'.
src/components/presale/organisms/modals/obt/ModalRewardOBT.tsx(123,26): error TS18048: 'firstCharacter' is possibly 'undefined'.
src/components/presale/organisms/modals/obt/ModalRewardOBT.tsx(123,54): error TS18048: 'firstCharacter' is possibly 'undefined'.
src/components/presale/organisms/modals/obt/ModalRewardOBT.tsx(126,28): error TS2345: Argument of type 'Character | undefined' is not assignable to parameter of type 'Partial<CharacterData>'.
  Type 'undefined' is not assignable to type 'Partial<CharacterData>'.
src/components/presale/organisms/modals/obt/ModalRewardOBT.tsx(222,32): error TS18048: 'firstServer' is possibly 'undefined'.
src/components/presale/organisms/modals/obt/ModalRewardOBT.tsx(227,29): error TS18048: 'firstServer' is possibly 'undefined'.
src/components/presale/organisms/modals/shared/ModalHowToPlay.tsx(45,6): error TS2375: Type '{ children: (Element | undefined)[]; centered: true; backdrop: true | "static" | undefined; dialogClassName: string; id: string; keyboard: boolean | undefined; show: boolean; onHide: () => void; }' is not assignable to type 'ModalProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'backdrop' are incompatible.
    Type 'true | "static" | undefined' is not assignable to type 'boolean | "static"'.
      Type 'undefined' is not assignable to type 'boolean | "static"'.
src/components/presale/organisms/modals/shared/ModalSelectCharacter.tsx(105,26): error TS18048: 'firstCharacter' is possibly 'undefined'.
src/components/presale/organisms/modals/shared/ModalSelectCharacter.tsx(105,54): error TS18048: 'firstCharacter' is possibly 'undefined'.
src/components/presale/organisms/modals/shared/ModalSelectCharacter.tsx(148,32): error TS18048: 'firstServer' is possibly 'undefined'.
src/components/presale/organisms/modals/shared/ModalSelectCharacter.tsx(153,29): error TS18048: 'firstServer' is possibly 'undefined'.
src/components/presale/organisms/OffcanvasMileage.tsx(49,30): error TS6133: 'productId' is declared but its value is never read.
src/components/presale/organisms/OverlayNoCharacter.tsx(1,1): error TS6133: 'React' is declared but its value is never read.
src/components/presale/organisms/sections/DiamondBoxModal.tsx(4,8): error TS6133: 'React' is declared but its value is never read.
src/components/presale/organisms/sections/DiamondBoxModal.tsx(81,9): error TS2322: Type '{ id: string; name: string; description: string | undefined; bundles: { bundle: { items: { tier?: number; item?: { thumbnail_url?: string; }; }[]; }; }[]; thumbnail_url: string; price: number | undefined; category_id: string | undefined; limit_per_player_remaining: number; rankClass: string; }[]' is not assignable to type 'DiamondShopProduct[]'.
  Type '{ id: string; name: string; description: string | undefined; bundles: { bundle: { items: Array<{ tier?: number; item?: { thumbnail_url?: string; }; }>; }; }[]; thumbnail_url: string; price: number | undefined; category_id: string | undefined; limit_per_player_remaining: number; rankClass: string; }' is not assignable to type 'DiamondShopProduct' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'description' are incompatible.
      Type 'string | undefined' is not assignable to type 'string'.
        Type 'undefined' is not assignable to type 'string'.
src/components/presale/organisms/sections/DiamondBoxModal.tsx(161,13): error TS2375: Type '{ product_id: string; quantity: number; server_id: string | number | undefined; character_id: string | number | undefined; }' is not assignable to type 'PurchaseRequestPayload' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'server_id' are incompatible.
    Type 'string | number | undefined' is not assignable to type 'string | number'.
      Type 'undefined' is not assignable to type 'string | number'.
src/components/presale/organisms/sections/PresaleBoardSection.tsx(112,12): error TS2532: Object is possibly 'undefined'.
src/components/presale/organisms/sections/PresaleBoardSection.tsx(113,12): error TS2532: Object is possibly 'undefined'.
src/components/presale/organisms/sections/PresaleBoardSection.tsx(114,11): error TS2532: Object is possibly 'undefined'.
src/components/presale/organisms/sections/PresaleBoardSection.tsx(136,39): error TS2532: Object is possibly 'undefined'.
src/components/presale/organisms/sections/PresaleBoardSection.tsx(137,11): error TS2532: Object is possibly 'undefined'.
src/components/presale/organisms/sections/PresaleBoardSection.tsx(142,15): error TS2532: Object is possibly 'undefined'.
src/components/presale/organisms/sections/PresaleBoardSection.tsx(145,15): error TS2532: Object is possibly 'undefined'.
src/components/presale/organisms/sections/PresaleBoardSection.tsx(146,15): error TS2532: Object is possibly 'undefined'.
src/components/presale/organisms/sections/PresaleBoardSection.tsx(148,38): error TS2532: Object is possibly 'undefined'.
src/components/presale/organisms/sections/PresaleGachaSection.tsx(39,6): error TS2375: Type '{ isCompleted: boolean; mysticalBoxCount: number; overlayMessage: string | undefined; onBoxDetailClick: () => void; onOpenBoxClick: () => void; onShopClick: () => void; }' is not assignable to type 'SectionBodyProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'overlayMessage' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/presale/organisms/sections/SectionFooter.tsx(141,18): error TS2375: Type '{ key: "silver" | "gold" | "mystical"; disabled: boolean; isLocked: boolean; isQuantityLoading: boolean; isShop: boolean; quantity: number; type: "silver" | "gold" | "mystical"; onDetailClick: () => void; onOpenClick: () => void; onShopClick: (() => void) | undefined; }' is not assignable to type 'BoxOpenItemProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'onShopClick' are incompatible.
    Type '(() => void) | undefined' is not assignable to type '() => void'.
      Type 'undefined' is not assignable to type '() => void'.
src/components/presale/templates/PresaleTemplate.tsx(129,13): error TS7030: Not all code paths return a value.
src/components/presale/templates/PresaleTemplate.tsx(228,22): error TS2379: Argument of type '{ stampX1: UseStampReturn; stampX5: UseStampReturn; stampAll: UseStampReturn; presaleSP: number | undefined; openModal: (modal: ModalType) => void; ... 7 more ...; checkSendItemData: PresaleCheckSendItemResponse | undefined; }' is not assignable to parameter of type 'UsePresaleWalkParams' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'checkSendItemData' are incompatible.
    Type 'PresaleCheckSendItemResponse | undefined' is not assignable to type 'PresaleCheckSendItemResponse | null'.
      Type 'undefined' is not assignable to type 'PresaleCheckSendItemResponse | null'.
src/components/presale/templates/PresaleTemplate.tsx(747,37): error TS2322: Type '{ activeModal: ModalType | null; modalMessage: string | null; isModalOpen: (modal: ModalType) => boolean; openModal: (modal: ModalType) => void; closeModal: () => void; setModalMessage: Dispatch<...>; ... 30 more ...; setActualSpSpent: Dispatch<...>; }' is not assignable to type 'PresaleModalContextValue'.
  The types of 'modeData.eventStatus.endDate' are incompatible between these types.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/components/presale/templates/PresaleTemplate.tsx(768,10): error TS2375: Type '{ overlayMessage: string | undefined; mysticalShopUnlocked?: boolean; shopUnlockCondition?: string; walkCosts?: { walk1: 1000; walk5: number; walkAll: number; }; userSpAmount?: number; onMysticalShopClick?: () => void; ... 8 more ...; isWalletLoading: boolean; }' is not assignable to type 'SectionFooterProps' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'overlayMessage' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/contexts/guild-fund/CharacterContext.tsx(69,9): error TS2322: Type 'RoleKey | undefined' is not assignable to type 'RoleKey'.
  Type 'undefined' is not assignable to type 'RoleKey'.
src/hooks/daily-login-cbt/useClaimRewardCbt.tsx(78,36): error TS2769: No overload matches this call.
  Overload 1 of 3, '(extraArgument: { server_id?: string | number; family_id?: string | number; }, options?: SWRMutationConfiguration<ApiResponse<unknown> | null, any, [string] | null, { server_id?: string | number; family_id?: string | number; }, ApiResponse<...> | null> | undefined): Promise<...>', gave the following error.
    Argument of type '{ server_id: string | number | undefined; family_id: string | number | undefined; }' is not assignable to parameter of type '{ server_id?: string | number; family_id?: string | number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'server_id' are incompatible.
        Type 'string | number | undefined' is not assignable to type 'string | number'.
          Type 'undefined' is not assignable to type 'string | number'.
  Overload 2 of 3, '(extraArgument: { server_id?: string | number; family_id?: string | number; }, options?: (SWRMutationConfiguration<ApiResponse<unknown> | null, any, [string] | null, { server_id?: string | number; family_id?: string | number; }, ApiResponse<...> | null> & { ...; }) | undefined): Promise<...>', gave the following error.
    Argument of type '{ server_id: string | number | undefined; family_id: string | number | undefined; }' is not assignable to parameter of type '{ server_id?: string | number; family_id?: string | number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'server_id' are incompatible.
        Type 'string | number | undefined' is not assignable to type 'string | number'.
          Type 'undefined' is not assignable to type 'string | number'.
  Overload 3 of 3, '(extraArgument: { server_id?: string | number; family_id?: string | number; }, options?: (SWRMutationConfiguration<ApiResponse<unknown> | null, any, [string] | null, { server_id?: string | number; family_id?: string | number; }, ApiResponse<...> | null> & { ...; }) | undefined): Promise<...>', gave the following error.
    Argument of type '{ server_id: string | number | undefined; family_id: string | number | undefined; }' is not assignable to parameter of type '{ server_id?: string | number; family_id?: string | number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'server_id' are incompatible.
        Type 'string | number | undefined' is not assignable to type 'string | number'.
          Type 'undefined' is not assignable to type 'string | number'.
src/hooks/daily-login/useClaimReward.tsx(80,36): error TS2769: No overload matches this call.
  Overload 1 of 3, '(extraArgument: { server_id?: string | number; family_id?: string | number; }, options?: SWRMutationConfiguration<ApiResponse<unknown> | null, any, [string, string] | null, { server_id?: string | number; family_id?: string | number; }, ApiResponse<...> | null> | undefined): Promise<...>', gave the following error.
    Argument of type '{ server_id: string | number | undefined; family_id: string | number | undefined; }' is not assignable to parameter of type '{ server_id?: string | number; family_id?: string | number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'server_id' are incompatible.
        Type 'string | number | undefined' is not assignable to type 'string | number'.
          Type 'undefined' is not assignable to type 'string | number'.
  Overload 2 of 3, '(extraArgument: { server_id?: string | number; family_id?: string | number; }, options?: (SWRMutationConfiguration<ApiResponse<unknown> | null, any, [string, string] | null, { server_id?: string | number; family_id?: string | number; }, ApiResponse<...> | null> & { ...; }) | undefined): Promise<...>', gave the following error.
    Argument of type '{ server_id: string | number | undefined; family_id: string | number | undefined; }' is not assignable to parameter of type '{ server_id?: string | number; family_id?: string | number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'server_id' are incompatible.
        Type 'string | number | undefined' is not assignable to type 'string | number'.
          Type 'undefined' is not assignable to type 'string | number'.
  Overload 3 of 3, '(extraArgument: { server_id?: string | number; family_id?: string | number; }, options?: (SWRMutationConfiguration<ApiResponse<unknown> | null, any, [string, string] | null, { server_id?: string | number; family_id?: string | number; }, ApiResponse<...> | null> & { ...; }) | undefined): Promise<...>', gave the following error.
    Argument of type '{ server_id: string | number | undefined; family_id: string | number | undefined; }' is not assignable to parameter of type '{ server_id?: string | number; family_id?: string | number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'server_id' are incompatible.
        Type 'string | number | undefined' is not assignable to type 'string | number'.
          Type 'undefined' is not assignable to type 'string | number'.
src/hooks/events/gacha/useGachaPageLogic.ts(138,9): error TS2532: Object is possibly 'undefined'.
src/hooks/events/gacha/useGachaPageLogic.ts(143,19): error TS2345: Argument of type '(prev: InterfaceConfig) => { reward: undefined; rewardIsRare: undefined; isLoading: boolean; event: { activityId: string | null; active: GachaListResponseInfo | null; }; modal: { ...; }; skip: { ...; }; gachaAmount: number | null; gachaPrice: number | null; }' is not assignable to parameter of type 'SetStateAction<InterfaceConfig>'.
  Type '(prev: InterfaceConfig) => { reward: undefined; rewardIsRare: undefined; isLoading: boolean; event: { activityId: string | null; active: GachaListResponseInfo | null; }; modal: { ...; }; skip: { ...; }; gachaAmount: number | null; gachaPrice: number | null; }' is not assignable to type '(prevState: InterfaceConfig) => InterfaceConfig'.
    Call signature return types '{ reward: undefined; rewardIsRare: undefined; isLoading: boolean; event: { activityId: string | null; active: GachaListResponseInfo | null; }; modal: { confirmGacha: boolean; ... 4 more ...; amount: boolean; }; skip: { ...; }; gachaAmount: number | null; gachaPrice: number | null; }' and 'InterfaceConfig' are incompatible.
      The types of 'reward' are incompatible between these types.
        Type 'undefined' is not assignable to type 'GachaPlayResponseItems[]'.
src/hooks/events/gacha/useGachaPageLogic.ts(153,17): error TS2345: Argument of type '(prev: InterfaceConfig) => { isLoading: true; modal: { confirmGacha: false; detail: boolean; detailVideo: boolean; openGacha: boolean; guarantee: boolean; amount: boolean; }; ... 5 more ...; gachaPrice: number | null; }' is not assignable to parameter of type 'SetStateAction<InterfaceConfig>'.
  Type '(prev: InterfaceConfig) => { isLoading: true; modal: { confirmGacha: false; detail: boolean; detailVideo: boolean; openGacha: boolean; guarantee: boolean; amount: boolean; }; ... 5 more ...; gachaPrice: number | null; }' is not assignable to type '(prevState: InterfaceConfig) => InterfaceConfig'.
    Call signature return types '{ isLoading: true; modal: { confirmGacha: false; detail: boolean; detailVideo: boolean; openGacha: boolean; guarantee: boolean; amount: boolean; }; reward: undefined; rewardIsRare: undefined; event: { ...; }; skip: { ...; }; gachaAmount: number | null; gachaPrice: number | null; }' and 'InterfaceConfig' are incompatible.
      The types of 'reward' are incompatible between these types.
        Type 'undefined' is not assignable to type 'GachaPlayResponseItems[]'.
src/hooks/events/gacha/useGachaPageLogic.ts(202,21): error TS2345: Argument of type '(prev: InterfaceConfig) => { reward: GachaPlayResponseItems[] | undefined; modal: { openGacha: false; confirmGacha: boolean; detail: boolean; detailVideo: boolean; guarantee: boolean; amount: boolean; }; ... 5 more ...; rewardIsRare?: boolean; }' is not assignable to parameter of type 'SetStateAction<InterfaceConfig>'.
  Type '(prev: InterfaceConfig) => { reward: GachaPlayResponseItems[] | undefined; modal: { openGacha: false; confirmGacha: boolean; detail: boolean; detailVideo: boolean; guarantee: boolean; amount: boolean; }; ... 5 more ...; rewardIsRare?: boolean; }' is not assignable to type '(prevState: InterfaceConfig) => InterfaceConfig'.
    Call signature return types '{ reward: GachaPlayResponseItems[] | undefined; modal: { openGacha: false; confirmGacha: boolean; detail: boolean; detailVideo: boolean; guarantee: boolean; amount: boolean; }; ... 5 more ...; rewardIsRare?: boolean; }' and 'InterfaceConfig' are incompatible.
      The types of 'reward' are incompatible between these types.
        Type 'GachaPlayResponseItems[] | undefined' is not assignable to type 'GachaPlayResponseItems[]'.
          Type 'undefined' is not assignable to type 'GachaPlayResponseItems[]'.
src/hooks/events/useGetAllEventsInfo.ts(20,5): error TS2769: No overload matches this call.
  Overload 1 of 12, '(key: [string, EActivityType] | null, fetcher: ((arg: [string, EActivityType]) => FetcherResponse<ApiResponse<IInfoResponse[]>>) | null, config: SWRConfiguration<...> | undefined): SWRResponse<...>', gave the following error.
    Argument of type '{ fallbackData: ApiResponse<IInfoResponse[]> | undefined; }' is not assignable to parameter of type 'SWRConfiguration<ApiResponse<IInfoResponse[]>, any, (arg: [string, EActivityType]) => FetcherResponse<ApiResponse<IInfoResponse[]>>>' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Type '{ fallbackData: ApiResponse<IInfoResponse[]> | undefined; }' is not assignable to type 'Partial<PublicConfiguration<ApiResponse<IInfoResponse[]>, any, (arg: [string, EActivityType]) => FetcherResponse<ApiResponse<IInfoResponse[]>>>>' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
        Types of property 'fallbackData' are incompatible.
          Type 'ApiResponse<IInfoResponse[]> | undefined' is not assignable to type 'ApiResponse<IInfoResponse[]> | Promise<ApiResponse<IInfoResponse[]>>'.
            Type 'undefined' is not assignable to type 'ApiResponse<IInfoResponse[]> | Promise<ApiResponse<IInfoResponse[]>>'.
  Overload 2 of 12, '(key: Key, fetcher: BareFetcher<ApiResponse<IInfoResponse[]>> | null, config: SWRConfiguration<ApiResponse<IInfoResponse[]>, any, BareFetcher<...>> | undefined): SWRResponse<...>', gave the following error.
    Argument of type '{ fallbackData: ApiResponse<IInfoResponse[]> | undefined; }' is not assignable to parameter of type 'SWRConfiguration<ApiResponse<IInfoResponse[]>, any, BareFetcher<ApiResponse<IInfoResponse[]>>>' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Type '{ fallbackData: ApiResponse<IInfoResponse[]> | undefined; }' is not assignable to type 'Partial<PublicConfiguration<ApiResponse<IInfoResponse[]>, any, BareFetcher<ApiResponse<IInfoResponse[]>>>>' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
        Types of property 'fallbackData' are incompatible.
          Type 'ApiResponse<IInfoResponse[]> | undefined' is not assignable to type 'ApiResponse<IInfoResponse[]> | Promise<ApiResponse<IInfoResponse[]>>'.
            Type 'undefined' is not assignable to type 'ApiResponse<IInfoResponse[]> | Promise<ApiResponse<IInfoResponse[]>>'.
src/hooks/events/useGetEventInfo.ts(21,5): error TS2769: No overload matches this call.
  Overload 1 of 12, '(key: [string, EActivityType, string] | null, fetcher: ((arg: [string, EActivityType, string]) => FetcherResponse<ApiResponse<IInfoResponse>>) | null, config: SWRConfiguration<...> | undefined): SWRResponse<...>', gave the following error.
    Argument of type '{ fallbackData: ApiResponse<IInfoResponse> | undefined; }' is not assignable to parameter of type 'SWRConfiguration<ApiResponse<IInfoResponse>, any, (arg: [string, EActivityType, string]) => FetcherResponse<ApiResponse<IInfoResponse>>>' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Type '{ fallbackData: ApiResponse<IInfoResponse> | undefined; }' is not assignable to type 'Partial<PublicConfiguration<ApiResponse<IInfoResponse>, any, (arg: [string, EActivityType, string]) => FetcherResponse<ApiResponse<IInfoResponse>>>>' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
        Types of property 'fallbackData' are incompatible.
          Type 'ApiResponse<IInfoResponse> | undefined' is not assignable to type 'ApiResponse<IInfoResponse> | Promise<ApiResponse<IInfoResponse>>'.
            Type 'undefined' is not assignable to type 'ApiResponse<IInfoResponse> | Promise<ApiResponse<IInfoResponse>>'.
  Overload 2 of 12, '(key: Key, fetcher: BareFetcher<ApiResponse<IInfoResponse>> | null, config: SWRConfiguration<ApiResponse<IInfoResponse>, any, BareFetcher<...>> | undefined): SWRResponse<...>', gave the following error.
    Argument of type '{ fallbackData: ApiResponse<IInfoResponse> | undefined; }' is not assignable to parameter of type 'SWRConfiguration<ApiResponse<IInfoResponse>, any, BareFetcher<ApiResponse<IInfoResponse>>>' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Type '{ fallbackData: ApiResponse<IInfoResponse> | undefined; }' is not assignable to type 'Partial<PublicConfiguration<ApiResponse<IInfoResponse>, any, BareFetcher<ApiResponse<IInfoResponse>>>>' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
        Types of property 'fallbackData' are incompatible.
          Type 'ApiResponse<IInfoResponse> | undefined' is not assignable to type 'ApiResponse<IInfoResponse> | Promise<ApiResponse<IInfoResponse>>'.
            Type 'undefined' is not assignable to type 'ApiResponse<IInfoResponse> | Promise<ApiResponse<IInfoResponse>>'.
src/hooks/presale/useCheckSendItem.tsx(22,5): error TS2769: No overload matches this call.
  The last overload gave the following error.
    Type '() => Promise<{ data: PresaleCheckSendItemResponse; message: string | undefined; }>' has no properties in common with type 'SWRConfiguration<{ data: PresaleCheckSendItemResponse; message?: string; }, Error, BareFetcher<{ data: PresaleCheckSendItemResponse; message?: string; }>>'.
src/hooks/presale/useClaimOBTReward.tsx(86,36): error TS2769: No overload matches this call.
  Overload 1 of 3, '(extraArgument: { serverId?: string | number; characterId?: string | number; }, options?: SWRMutationConfiguration<{ success: boolean; message: string; data: PresaleClaimResponseData; } | { ...; }, any, [...] | null, { ...; }, { ...; } | { ...; }> | undefined): Promise<...>', gave the following error.
    Argument of type '{ serverId: string | number | undefined; characterId: string | number | undefined; }' is not assignable to parameter of type '{ serverId?: string | number; characterId?: string | number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'serverId' are incompatible.
        Type 'string | number | undefined' is not assignable to type 'string | number'.
          Type 'undefined' is not assignable to type 'string | number'.
  Overload 2 of 3, '(extraArgument: { serverId?: string | number; characterId?: string | number; }, options?: (SWRMutationConfiguration<{ success: boolean; message: string; data: PresaleClaimResponseData; } | { ...; }, any, [...] | null, { ...; }, { ...; } | { ...; }> & { ...; }) | undefined): Promise<...>', gave the following error.
    Argument of type '{ serverId: string | number | undefined; characterId: string | number | undefined; }' is not assignable to parameter of type '{ serverId?: string | number; characterId?: string | number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'serverId' are incompatible.
        Type 'string | number | undefined' is not assignable to type 'string | number'.
          Type 'undefined' is not assignable to type 'string | number'.
  Overload 3 of 3, '(extraArgument: { serverId?: string | number; characterId?: string | number; }, options?: (SWRMutationConfiguration<{ success: boolean; message: string; data: PresaleClaimResponseData; } | { ...; }, any, [...] | null, { ...; }, { ...; } | { ...; }> & { ...; }) | undefined): Promise<...>', gave the following error.
    Argument of type '{ serverId: string | number | undefined; characterId: string | number | undefined; }' is not assignable to parameter of type '{ serverId?: string | number; characterId?: string | number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'serverId' are incompatible.
        Type 'string | number | undefined' is not assignable to type 'string | number'.
          Type 'undefined' is not assignable to type 'string | number'.
src/hooks/presale/useOpenExistingBox.tsx(175,13): error TS2375: Type '{ product_id: string; quantity: number; server_id: string | number | undefined; character_id: string | number | undefined; }' is not assignable to type 'PurchaseRequestPayload' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'server_id' are incompatible.
    Type 'string | number | undefined' is not assignable to type 'string | number'.
      Type 'undefined' is not assignable to type 'string | number'.
src/hooks/presale/usePresaleStampList.tsx(110,5): error TS2345: Argument of type '() => { rows: BoardCellData[][]; flatCells: (BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; })[]; currentLevel: number; loopCounter: number; maxLevel: number; } | u...' is not assignable to parameter of type '() => { rows: BoardCellData[][]; flatCells: BoardCellData[]; currentLevel: number; loopCounter: number; maxLevel: number; } | undefined'.
  Type '{ rows: BoardCellData[][]; flatCells: (BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; })[]; currentLevel: number; loopCounter: number; maxLevel: number; } | undefined' is not assignable to type '{ rows: BoardCellData[][]; flatCells: BoardCellData[]; currentLevel: number; loopCounter: number; maxLevel: number; } | undefined'.
    Type '{ rows: BoardCellData[][]; flatCells: (BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; })[]; currentLevel: number; loopCounter: number; maxLevel: number; }' is not assignable to type '{ rows: BoardCellData[][]; flatCells: BoardCellData[]; currentLevel: number; loopCounter: number; maxLevel: number; }'.
      Types of property 'flatCells' are incompatible.
        Type '(BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; })[]' is not assignable to type 'BoardCellData[]'.
          Type 'BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; }' is not assignable to type 'BoardCellData' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
            Type '{ rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; }' is not assignable to type 'BoardCellData' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
              Types of property 'primaryImageName' are incompatible.
                Type 'undefined' is not assignable to type 'string'.
src/hooks/presale/usePresaleStampList.tsx(168,7): error TS2322: Type '(BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; })[]' is not assignable to type 'BoardCellData[]'.
  Type 'BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; }' is not assignable to type 'BoardCellData' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Type '{ rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; }' is not assignable to type 'BoardCellData' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'primaryImageName' are incompatible.
        Type 'undefined' is not assignable to type 'string'.
src/hooks/presale/usePresaleStampList.tsx(169,7): error TS2322: Type '(BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; })[]' is not assignable to type 'BoardCellData[]'.
  Type 'BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; }' is not assignable to type 'BoardCellData' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Type '{ rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; }' is not assignable to type 'BoardCellData' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'primaryImageName' are incompatible.
        Type 'undefined' is not assignable to type 'string'.
src/hooks/presale/usePresaleStampList.tsx(170,7): error TS2322: Type '(BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; })[]' is not assignable to type 'BoardCellData[]'.
  Type 'BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; }' is not assignable to type 'BoardCellData' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Type '{ rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; }' is not assignable to type 'BoardCellData' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'primaryImageName' are incompatible.
        Type 'undefined' is not assignable to type 'string'.
src/hooks/presale/usePresaleStampList.tsx(171,7): error TS2322: Type '(BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; })[]' is not assignable to type 'BoardCellData[]'.
  Type 'BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; }' is not assignable to type 'BoardCellData' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Type '{ rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; }' is not assignable to type 'BoardCellData' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'primaryImageName' are incompatible.
        Type 'undefined' is not assignable to type 'string'.
src/hooks/presale/usePresaleStampList.tsx(172,7): error TS2322: Type '(BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; })[]' is not assignable to type 'BoardCellData[]'.
  Type 'BoardCellData | { rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; } | { ...; }' is not assignable to type 'BoardCellData' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Type '{ rewards: never[]; primaryImageName: undefined; isEndPoint: boolean; id: string; cellNumber?: number; isSpecialCell?: boolean; endPointText?: string; bonusHeight?: number; }' is not assignable to type 'BoardCellData' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'primaryImageName' are incompatible.
        Type 'undefined' is not assignable to type 'string'.
src/hooks/presale/usePurchaseBox.tsx(83,57): error TS2379: Argument of type '{ server_id: string | number | undefined; character_id: string | number | undefined; product_id: string; quantity: number; }' is not assignable to parameter of type 'PurchaseRequestPayload' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'server_id' are incompatible.
    Type 'string | number | undefined' is not assignable to type 'string | number'.
      Type 'undefined' is not assignable to type 'string | number'.
src/hooks/presale/useStamp.tsx(107,7): error TS2532: Object is possibly 'undefined'.
src/hooks/presale/useStamp.tsx(201,40): error TS2769: No overload matches this call.
  Overload 1 of 3, '(extraArgument: { serverId?: string | number; characterId?: string | number; }, options?: SWRMutationConfiguration<ApiResponse<PurchaseResponse>, any, "stamp-all" | "stamp-x1" | "stamp-x5", { ...; }, ApiResponse<...>> | undefined): Promise<...>', gave the following error.
    Argument of type '{ serverId: string | number | undefined; characterId: string | number | undefined; }' is not assignable to parameter of type '{ serverId?: string | number; characterId?: string | number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'serverId' are incompatible.
        Type 'string | number | undefined' is not assignable to type 'string | number'.
          Type 'undefined' is not assignable to type 'string | number'.
  Overload 2 of 3, '(extraArgument: { serverId?: string | number; characterId?: string | number; }, options?: (SWRMutationConfiguration<ApiResponse<PurchaseResponse>, any, "stamp-all" | "stamp-x1" | "stamp-x5", { ...; }, ApiResponse<...>> & { ...; }) | undefined): Promise<...>', gave the following error.
    Argument of type '{ serverId: string | number | undefined; characterId: string | number | undefined; }' is not assignable to parameter of type '{ serverId?: string | number; characterId?: string | number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'serverId' are incompatible.
        Type 'string | number | undefined' is not assignable to type 'string | number'.
          Type 'undefined' is not assignable to type 'string | number'.
  Overload 3 of 3, '(extraArgument: { serverId?: string | number; characterId?: string | number; }, options?: (SWRMutationConfiguration<ApiResponse<PurchaseResponse>, any, "stamp-all" | "stamp-x1" | "stamp-x5", { ...; }, ApiResponse<...>> & { ...; }) | undefined): Promise<...>', gave the following error.
    Argument of type '{ serverId: string | number | undefined; characterId: string | number | undefined; }' is not assignable to parameter of type '{ serverId?: string | number; characterId?: string | number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'serverId' are incompatible.
        Type 'string | number | undefined' is not assignable to type 'string | number'.
          Type 'undefined' is not assignable to type 'string | number'.
src/hooks/useCountdown.tsx(9,13): error TS7030: Not all code paths return a value.
src/hooks/useGetCharacters.tsx(38,17): error TS2379: Argument of type '{ roleID: undefined; name: undefined; level: undefined; serverID: undefined; serverName: undefined; loginTime: undefined; createTime: undefined; }' is not assignable to parameter of type 'Partial<CharacterData>' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'roleID' are incompatible.
    Type 'undefined' is not assignable to type 'number'.
src/services/daily-login.service.ts(21,7): error TS2379: Argument of type '{ token: string | null | undefined; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | null | undefined; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | null | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/daily-login.service.ts(29,7): error TS2379: Argument of type '{ token: string | null | undefined; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | null | undefined; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | null | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/daily-login.service.ts(37,7): error TS2379: Argument of type '{ token: string | null | undefined; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | null | undefined; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | null | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/daily-login.service.ts(43,79): error TS2379: Argument of type '{ token: string | null | undefined; method: string; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | null | undefined; method: string; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | null | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/daily-login.service.ts(49,77): error TS2379: Argument of type '{ token: string | null | undefined; method: string; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | null | undefined; method: string; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | null | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/daily-login.service.ts(54,79): error TS2379: Argument of type '{ token: string | null | undefined; method: string; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | null | undefined; method: string; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | null | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/daily-login.service.ts(64,78): error TS2379: Argument of type '{ token: string | null | undefined; method: string; body: { serverId: string | undefined; characterId: string | undefined; }; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | null | undefined; method: string; body: { serverId: string | undefined; characterId: string | undefined; }; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | null | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/presale.service.ts(65,70): error TS2379: Argument of type '{ token: string | null | undefined; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | null | undefined; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | null | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/presale.service.ts(78,68): error TS2379: Argument of type '{ token: string | null | undefined; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | null | undefined; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | null | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/presale.service.ts(123,62): error TS2379: Argument of type '{ method: string; token: string | undefined; headers: { 'Content-Type': string; }; body: Record<string, string> | undefined; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ method: string; token: string | undefined; headers: { 'Content-Type': string; }; body: Record<string, string> | undefined; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/presale.service.ts(147,62): error TS2379: Argument of type '{ method: string; token: string | undefined; timeout: number; body: Record<string, string | number> | undefined; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ method: string; token: string | undefined; timeout: number; body: Record<string, string | number> | undefined; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/presale.service.ts(161,61): error TS2379: Argument of type '{ token: string | null | undefined; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | null | undefined; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | null | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/presale.service.ts(171,72): error TS2379: Argument of type '{ token: string | null | undefined; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | null | undefined; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | null | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/presale.service.ts(181,77): error TS2379: Argument of type '{ token: string | null | undefined; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | null | undefined; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | null | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/presale.service.ts(251,61): error TS2379: Argument of type '{ token: string | null | undefined; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | null | undefined; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | null | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/redeem.service.ts(13,7): error TS2379: Argument of type '{ token: string | undefined; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | undefined; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/redeem.service.ts(20,7): error TS2379: Argument of type '{ token: string | undefined; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | undefined; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/services/redeem.service.ts(30,7): error TS2379: Argument of type '{ token: string | undefined; method: string; }' is not assignable to parameter of type 'FetcherOptions' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ token: string | undefined; method: string; }' is not assignable to type '{ token?: string | null; unwrapApiResponse?: boolean; query?: Record<string, unknown>; body?: object | BodyInit; timeout?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'token' are incompatible.
      Type 'string | undefined' is not assignable to type 'string | null'.
        Type 'undefined' is not assignable to type 'string | null'.
src/stores/access-token/userAccessToken.ts(6,7): error TS2375: Type '{ token_type: undefined; expires_in: undefined; access_token: undefined; refresh_token: undefined; setData: () => void; logout: () => void; }' is not assignable to type 'UserAccessTokenState' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'token_type' are incompatible.
    Type 'undefined' is not assignable to type 'string'.
src/stores/character/useSelectedCharacterStore.ts(26,14): error TS2375: Type '{ setData: (data: Partial<CharacterData>) => unknown; setCharacterList: (character: Character[]) => unknown; setServerList: (server: Servers[]) => unknown; logout: () => unknown; characterList: undefined; serverList: undefined; ... 6 more ...; createTime: undefined; }' is not assignable to type 'CharacterState' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'characterList' are incompatible.
    Type 'undefined' is not assignable to type 'Character[]'.
src/stores/character/useSelectedCharacterStore.ts(32,25): error TS2379: Argument of type '{ characterList: undefined; serverList: undefined; roleID: undefined; name: undefined; level: undefined; serverID: undefined; serverName: undefined; loginTime: undefined; createTime: undefined; }' is not assignable to parameter of type 'CharacterState | Partial<CharacterState> | ((state: CharacterState) => CharacterState | Partial<CharacterState>)' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ characterList: undefined; serverList: undefined; roleID: undefined; name: undefined; level: undefined; serverID: undefined; serverName: undefined; loginTime: undefined; createTime: undefined; }' is not assignable to type 'Partial<CharacterState>' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'characterList' are incompatible.
      Type 'undefined' is not assignable to type 'Character[]'.
src/stores/guild-fund/useSelectedGuildFundCharacterStore.ts(19,16): error TS2375: Type '{ setData: (data: Partial<IGuildFundCharacterState>) => unknown; createTime: undefined; level: undefined; loginTime: undefined; name: undefined; roleID: undefined; serverID: undefined; serverName: undefined; }' is not assignable to type 'IGuildFundCharacterState' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'roleID' are incompatible.
    Type 'undefined' is not assignable to type 'number'.
src/utils/auth/auth-cookies.ts(92,13): error TS2538: Type 'undefined' cannot be used as an index type.
src/utils/auth/auth-cookies.ts(94,13): error TS2538: Type 'undefined' cannot be used as an index type.
src/utils/auth/auth-cookies.ts(110,49): error TS2379: Argument of type '{ path: string; domain: string | undefined; secure: boolean; sameSite: SameSite; expires: Date; }' is not assignable to parameter of type '{ path?: string; domain?: string; secure?: boolean; sameSite?: SameSite; expires?: Date; maxAge?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'domain' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/utils/auth/auth-cookies.ts(119,51): error TS2379: Argument of type '{ path: string; domain: string | undefined; secure: boolean; sameSite: SameSite; maxAge: number; }' is not assignable to parameter of type '{ path?: string; domain?: string; secure?: boolean; sameSite?: SameSite; expires?: Date; maxAge?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'domain' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/utils/auth/auth-cookies.ts(128,45): error TS2379: Argument of type '{ path: string; domain: string | undefined; secure: boolean; sameSite: SameSite; expires: Date; }' is not assignable to parameter of type '{ path?: string; domain?: string; secure?: boolean; sameSite?: SameSite; expires?: Date; maxAge?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'domain' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/utils/auth/auth-cookies.ts(137,65): error TS2379: Argument of type '{ path: string; domain: string | undefined; secure: boolean; sameSite: SameSite; expires: Date; }' is not assignable to parameter of type '{ path?: string; domain?: string; secure?: boolean; sameSite?: SameSite; expires?: Date; maxAge?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'domain' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/utils/auth/auth-cookies.ts(158,3): error TS2375: Type '{ access_token: string; refresh_token: string | undefined; token_type: string | undefined; expires_in: number; token_expires_at: number | undefined; }' is not assignable to type 'Partial<TokenData> & { token_expires_at?: number; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Type '{ access_token: string; refresh_token: string | undefined; token_type: string | undefined; expires_in: number; token_expires_at: number | undefined; }' is not assignable to type 'Partial<TokenData>' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
    Types of property 'refresh_token' are incompatible.
      Type 'string | undefined' is not assignable to type 'string'.
        Type 'undefined' is not assignable to type 'string'.
src/utils/auth/auth-cookies.ts(171,26): error TS2379: Argument of type '{ path: string; domain: string | undefined; }' is not assignable to parameter of type '{ path?: string; domain?: string; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'domain' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/utils/auth/oauth.ts(54,9): error TS2375: Type '{ codeVerifier: string; stateCode: string; challenge: string; lastUrl: string | undefined; codeUsed: false; }' is not assignable to type 'OAuthState' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'lastUrl' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
src/utils/fetcher.ts(70,45): error TS2769: No overload matches this call.
  Overload 1 of 2, '(input: string | Request | URL, init?: RequestInit | undefined): Promise<Response>', gave the following error.
    Argument of type '{ headers: Headers; body: BodyInit | undefined; cache?: RequestCache; mode?: RequestMode; method?: string; signal?: AbortSignal | null; credentials?: RequestCredentials; ... 8 more ...; timeout?: number; }' is not assignable to parameter of type 'RequestInit' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'body' are incompatible.
        Type 'BodyInit | undefined' is not assignable to type 'BodyInit | null'.
          Type 'undefined' is not assignable to type 'BodyInit | null'.
  Overload 2 of 2, '(input: URL | RequestInfo, init?: RequestInit | undefined): Promise<Response>', gave the following error.
    Argument of type '{ headers: Headers; body: BodyInit | undefined; cache?: RequestCache; mode?: RequestMode; method?: string; signal?: AbortSignal | null; credentials?: RequestCredentials; ... 8 more ...; timeout?: number; }' is not assignable to parameter of type 'RequestInit' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
      Types of property 'body' are incompatible.
        Type 'BodyInit | undefined' is not assignable to type 'BodyInit | null'.
          Type 'undefined' is not assignable to type 'BodyInit | null'.
```

---

## ESLint

**Description**: Code linting and style checking

**Status**: ❌ **FAILED**

**Output**:
```
/Users/noon/Work/tosm-activity/src/app/(events)/cbt/characters-leveling/layout.tsx
  8:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/app/(events)/cbt/characters-leveling/page.tsx
  7:42  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/app/(events)/cbt/daily-login/layout.tsx
  9:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/app/(events)/cbt/daily-login/page.tsx
  9:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/(events)/cbt/layout.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/app/(events)/daily-login/[slug]/layout.tsx
  14:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/app/(events)/daily-login/[slug]/page.tsx
  17:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/(events)/daily-login/[slug]/utils.ts
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/app/(events)/gacha/history/page.tsx
  35:15  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/app/(events)/gacha/layout.tsx
  8:34  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/app/(events)/gacha/page.tsx
  9:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/app/(events)/guild-fund/exchange-shop-detail-success/page.tsx
  28:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/(events)/guild-fund/exchange-shop-detail/page.tsx
  20:10  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/(events)/guild-fund/exchange-shop/page.tsx
  23:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/(events)/guild-fund/history/page.tsx
  13:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/app/(events)/guild-fund/history/shop-detail-success/page.tsx
  43:7  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/(events)/guild-fund/layout.tsx
  6:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/app/(events)/guild-fund/loading.tsx
  4:10  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/(events)/guild-fund/page.tsx
  23:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/(events)/guild-fund/shop-detail-success/page.tsx
  37:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/(events)/guild-fund/shop-detail/page.tsx
  14:10  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/(events)/layout.tsx
  6:2  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/app/(events)/treasure/[slug]/config.ts
  9:26  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/app/(events)/treasure/[slug]/history/page.tsx
  13:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/app/(events)/treasure/[slug]/layout.tsx
  11:2  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/app/(events)/treasure/[slug]/lucky-user/page.tsx
  25:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/(events)/treasure/[slug]/page.tsx
  62:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/(events)/treasure/[slug]/shop/page.tsx
  21:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/app/(events)/treasure/[slug]/treasure/page.tsx
  33:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/app/(events)/treasure/[slug]/useBoardGame.ts
  19:20  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/app/(events)/treasure/[slug]/wheel/page.tsx
  31:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/(events)/treasure/[slug]/wheel/useWheelGame.ts
  19:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/app/invite-friend/action.ts
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/app/invite-friend/layout.tsx
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/app/invite-friend/open-box/page.tsx
  29:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/app/invite-friend/page.tsx
  15:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/invite-friend/utils.ts
  2:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/app/layout.tsx
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/app/not-found.tsx
  6:10  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/oauth/callback/page.tsx
  9:12  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/oauth/logout/page.tsx
  25:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/page.tsx
  6:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/presale/board/page.tsx
  14:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/presale/gacha/page.tsx
  14:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/presale/history/page.tsx
  8:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/presale/layout.tsx
  12:35  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/app/presale/page.tsx
  11:10  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/app/presale/utils.ts
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/app/provider.tsx
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/auth/AuthDataProvider.tsx
  8:30  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/auth/TestUserAuthWrapper.tsx
  12:2  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/characters-leveling/CustomSelect.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/characters-leveling/CustomSelect.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/characters-leveling/DailyLoginSection.tsx
  17:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/characters-leveling/DetailModal.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/characters-leveling/DetailModal.tsx
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/characters-leveling/LoginCard.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/characters-leveling/LoginCard.tsx
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/characters-leveling/ResponseClaimRewardModal.tsx
  6:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/characters-leveling/utils.ts
  2:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/common/DevelopmentTestPanel.tsx
  5:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/common/FrameAnimator.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/common/FrameAnimator.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login-cbt/atoms/Button.tsx
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login-cbt/atoms/Item.tsx
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login-cbt/molecules/CustomSelect.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login-cbt/molecules/DevelopmentTestButtons.tsx
  6:8  error  Parsing error: Unexpected token ActionResult

/Users/noon/Work/tosm-activity/src/components/daily-login-cbt/molecules/LoginCard.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login-cbt/organisms/ClaimButton.tsx
  3:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login-cbt/organisms/LoginCardRow.tsx
  3:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login-cbt/organisms/modal/CheckinSuccessModal.tsx
  5:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/daily-login-cbt/organisms/modal/GetItemModal.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login-cbt/organisms/modal/ItemDetailModal.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login-cbt/templates/DailyLoginCBTTemplate.tsx
  21:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/daily-login/atoms/CustomSelect.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login/atoms/ItemImage.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login/atoms/ItemLevel.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login/atoms/SpecialTag.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login/molecules/CheckinTotalBox.tsx
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login/molecules/ClaimRewardButton.tsx
  10:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login/molecules/DailyItemBox.tsx
  7:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/daily-login/molecules/DevelopmentTestButtons.tsx
  6:8  error  Parsing error: Unexpected token ActionResult

/Users/noon/Work/tosm-activity/src/components/daily-login/molecules/modals/CheckinSuccessModal.tsx
  5:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/daily-login/molecules/modals/ItemDetailsModal.tsx
  5:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/daily-login/molecules/modals/SuccessClaimModal.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login/organisms/DailyLoginFrame.tsx
  11:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/daily-login/organisms/DailyRow.tsx
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/daily-login/organisms/Wrapper.tsx
  17:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/daily-login/templates/DailyLoginTemplate.tsx
  24:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/error/404.tsx
  10:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/events/gacha/atoms/CharacterModalMedia.tsx
  4:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/gacha/atoms/CircularProgress.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/gacha/atoms/EventModal.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/gacha/atoms/EventRandom.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/gacha/molecules/DescriptionBox.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/gacha/molecules/SlideContent.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/gacha/organisms/GachaModalsContainer.tsx
  5:31  error  Parsing error: Unexpected token RateItem

/Users/noon/Work/tosm-activity/src/components/events/gacha/organisms/GachaRewardView.tsx
  17:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/gacha/organisms/GachaThumbnailSwiper.tsx
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/gacha/organisms/LeftColumn.tsx
  11:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/gacha/organisms/MobileGachaActions.tsx
  11:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/gacha/organisms/RightColumn.tsx
  10:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/gacha/organisms/Wrapper.tsx
  21:35  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/events/gacha/organisms/modals/ModalGachaAmount.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/gacha/organisms/modals/ModalGachaConfirm.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/gacha/organisms/modals/ModalGachaDetail.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/gacha/organisms/modals/ModalGachaGuarantee.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/gacha/organisms/modals/ModalGachaRate.tsx
  7:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/events/gacha/organisms/modals/ModalGachaReward.tsx
  14:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/gacha/organisms/modals/ModalGachaVideo.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/general/HistoryFilter/index.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/general/LiveToast.tsx
  14:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/general/MemberFooter/index.tsx
  7:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/events/general/MemberNavbar/NavMenu.tsx
  37:3  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/events/general/MemberNavbar/UserDropdown.tsx
  13:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/events/general/MemberNavbar/UserInfo.tsx
  28:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/events/general/MemberNavbar/index.tsx
  18:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/general/NavbarActionButtons/index.tsx
  10:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/general/OverlayPortal.tsx
  5:43  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/events/general/TooltipQuestion.tsx
  4:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/general/modals/ButtonModalSelectCharacter/DropdownCharacter.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/general/modals/ButtonModalSelectCharacter/index.tsx
  43:37  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/events/general/modals/ModalCharacterNotFound/index.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/general/modals/ModalEventBase/index.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/general/modals/ModalGuide/index.tsx
  6:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/atoms/BoxItemExtraReceived.tsx
  6:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/atoms/BoxItemReceived.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/atoms/ButtonBack.tsx
  8:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/atoms/ButtonViewMore.tsx
  3:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/atoms/GuildButton.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/atoms/OptionServer.tsx
  3:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/atoms/ProgressBar.tsx
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/modal/GuildModals.tsx
  34:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/modal/ModalChangeServer.tsx
  7:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/modal/ModalConfirmBuyShop.tsx
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/modal/ModalDetailItem.tsx
  4:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/modal/ModalGetReward.tsx
  6:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/modal/ModalGuildRole.tsx
  4:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/modal/ModalNoGuild.tsx
  6:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/modal/ModalSPError.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/modal/ModalShopModelError.tsx
  4:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/modal/ModalShopServerError.tsx
  5:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/modal/ModalViewConditionPrize.tsx
  4:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/modal/ModalViewItems.tsx
  33:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/modal/ModalViewReward.tsx
  6:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/molecules/BoxItemPrize.tsx
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/molecules/BoxItemProduct.tsx
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/molecules/BoxPointReceive.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/molecules/HistoryTableDetail.tsx
  12:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/molecules/HistoryTableGuildToken.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/molecules/HistoryTableHeader.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/molecules/Mileage.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/molecules/ProgressColumn.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/molecules/SucceededColumn.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/molecules/TabsShop.tsx
  3:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/organisms/GuildInfo.tsx
  12:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/organisms/GuildPrivilege.tsx
  11:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/organisms/HistoryExchangeShop.tsx
  38:33  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/organisms/HistoryGuildShop.tsx
  37:33  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/organisms/HistoryGuildToken.tsx
  38:33  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/organisms/Navbar.tsx
  25:18  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/organisms/ProductItems.tsx
  2:8  error  Parsing error: Unexpected token Dispatch

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/organisms/PurchaseCart.tsx
  23:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/pages/GuildShop.tsx
  6:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/pages/ShopDetailSuccessWrapper.tsx
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/pages/ShopDetailWrapper.tsx
  33:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/templates/GuildLayout.tsx
  2:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/templates/MenuRight.tsx
  12:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/templates/TemplateBoxData.tsx
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/templates/TemplateColumnLeft.tsx
  4:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/guild-fund/utils.ts
  6:34  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/events/layout/molecules/EventNavbar/index.tsx
  24:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/layout/organisms/EventLayout.tsx
  36:2  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/events/treasure/BoardModals.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/Header.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/JackpotSlot.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/MenuRight.tsx
  11:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/PlayRewardInfo.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/RandomButton.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/TabHistory.tsx
  10:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/TreasureChestEff.tsx
  3:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/TreasureCornerBoard.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/TreasureNormalBoard.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/TreasureOverlayPanel.tsx
  19:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/events/treasure/WheelActions.tsx
  6:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/WheelCanvas.tsx
  6:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/WheelModals.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/Wrapper.tsx
  18:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/CurrencyBar/Main.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/CurrencyBar/Main.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/CurrencyBar/types.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/DateDisplay/Main.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/MenuRight/Main.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/MenuRight/Main.tsx
  11:3  error  Parsing error: Unexpected token as

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Pagination/Main.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Pagination/Main.tsx
  31:3  error  Parsing error: Unexpected token as

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Pagination/mocks.ts
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/ProductCard/BuyButton/Frame.tsx
  3:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/ProductCard/BuyButton/Main.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/ProductCard/BuyButton/PriceTag/Main.tsx
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/ProductCard/BuyButton/PriceTag/index.ts
  2:8  error  Parsing error: Unexpected token type

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/ProductCard/Main.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/ProductCard/Main.tsx
  7:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/ProductCard/index.ts
  2:8  error  Parsing error: Unexpected token type

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Table/HistoryTable/Main.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Table/HistoryTable/Main.tsx
  12:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Table/HistoryTable/Row.tsx
  13:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Table/HistoryTable/SubRow.tsx
  10:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Table/HistoryTable/SupComponents/CreditDisplay.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Table/HistoryTable/SupComponents/ServerCharacter.tsx
  3:8  error  Parsing error: Unexpected token type

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Table/HistoryTable/SupComponents/SpinCount.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Table/HistoryTable/SupComponents/index.ts
  5:8  error  Parsing error: Unexpected token type

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Table/LuckyUserTable/Main.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Table/LuckyUserTable/Main.tsx
  13:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Table/LuckyUserTable/Row.tsx
  13:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Table/ShopTable/Main.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Table/ShopTable/Main.tsx
  12:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Title/Main.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Title/Main.tsx
  3:8  error  Parsing error: Unexpected token type

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Title/mocks.ts
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Common/Title/types.ts
  1:8  error  Parsing error: Unexpected token type

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Features/History/Filter/Main.tsx
  10:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Features/History/Main.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Features/History/Main.tsx
  10:25  error  Parsing error: Unexpected token )

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Features/History/Tabs/Main.tsx
  12:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Features/History/Tabs/TabButton.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Features/LuckyUser/Main.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Features/LuckyUser/Main.tsx
  6:27  error  Parsing error: Unexpected token )

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Features/Shop/Main.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Features/Shop/Main.tsx
  8:22  error  Parsing error: Unexpected token )

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Templates/Frame/Main.tsx
  5:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Templates/Main.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/Templates/Main.tsx
  2:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/BackButton/BackButton.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/BackButton/BackButton.tsx
  3:28  error  Parsing error: Unexpected token )

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/Badges/Rarity.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/Badges/Rarity.tsx
  3:8  error  Parsing error: Unexpected token type

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/Badges/index.ts
  2:8  error  Parsing error: Unexpected token type

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/CurrencyBox/CurrencyBox.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/CurrencyBox/CurrencyBox.tsx
  5:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/CurrencyBox/mocks.ts
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/CurrencyIcon/CurrencyIcon.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/CurrencyIcon/CurrencyIcon.tsx
  6:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/CurrencyIcon/index.ts
  2:8  error  Parsing error: Unexpected token type

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/CurrencyIcon/mocks.ts
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/CurrencyIcon/types.ts
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/Divider/Divider.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/Divider/Divider.tsx
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/MainButton/Frame.tsx
  3:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/MainButton/MainButton.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/UI/MainButton/MainButton.tsx
  6:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/hooks/useHistoryMock.ts
  7:8  error  Parsing error: Unexpected token TransactionMockMode

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/hooks/useLuckyUserMock.ts
  7:8  error  Parsing error: Unexpected token LuckyUserMockMode

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/hooks/useProductMock.ts
  5:31  error  Parsing error: Unexpected token ProductMockMode

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/hooks/useResponsive.ts
  84:3  error  Parsing error: Unexpected token as

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/mocks/history.ts
  3:30  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/mocks/lucky-user.ts
  5:30  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/mocks/products.ts
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/services/history.service.test.ts
  6:8  error  Parsing error: Unexpected token TransactionMockMode

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/services/history.service.ts
  6:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/services/lucky_user.service.test.ts
  6:8  error  Parsing error: Unexpected token LuckyUserMockMode

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/services/lucky_user.service.ts
  6:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/services/shop.service.test.ts
  4:31  error  Parsing error: Unexpected token ProductMockMode

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/services/shop.service.ts
  2:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/types/currency.ts
  2:8  error  Parsing error: Unexpected token type

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/types/lucky_user.interface.ts
  3:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/types/pagination.interface.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/types/product.interface.ts
  3:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/types/response.interface.ts
  3:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/types/transaction.interface.ts
  3:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/utils/formatDate.ts
  19:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/utils/formatNumber.ts
  21:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/ayothaya/utils/index.ts
  8:8  error  Parsing error: Unexpected token type

/Users/noon/Work/tosm-activity/src/components/events/treasure/modals/ModalConfirmResetBoard.tsx
  11:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/modals/ModalConfirmResetWheel.tsx
  11:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/modals/ModalItemInfo.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/modals/ModalPreviewItem.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/modals/ModalRewardBoard.tsx
  12:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/modals/ModalRewardWheel.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/modals/ModalShopConfirm.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/events/treasure/modals/ModalShopSuccess.tsx
  6:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/general/DescriptionWrapper.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/general/DescriptionWrapper.tsx
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/general/Loader.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/general/Loader.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/general/NoData.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/general/NoData.tsx
  4:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/general/Pagination.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/general/Pagination.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/general/RedirectToLogin.tsx
  40:37  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/general/SoundToggle.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/general/SoundToggle.tsx
  9:17  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/general/SweetAlert2.tsx
  23:2  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/general/TooltipQuestion.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/general/TooltipQuestion.tsx
  4:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/general/modal/CharacterSelectionModal.tsx
  9:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/general/modal/ModalError.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/general/modal/ModalError.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/general/modal/ModalNoCharacter.tsx
  5:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/general/modal/ModalNotLogin.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/general/modal/ModalNotLogin.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/general/modal/RewardClaimSuccessModal.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/general/modal/RewardClaimSuccessModal.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/general/swal/SwalErrorBox.tsx
  3:38  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/general/swal/swal-content/SwalContentSelectCharacter.tsx
  6:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/invite-friend/ModalConfirmOpenBox.tsx
  13:2  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/invite-friend/ModalErrorRedeemCode.tsx
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/invite-friend/ModalSocialEvent.tsx
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/invite-friend/ModalSuccessRedeemCode.tsx
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/invite-friend/atoms/EventPeriodLogo.tsx
  7:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/invite-friend/atoms/SocialButton.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/invite-friend/layouts/FooterInviteFriend.tsx
  6:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/invite-friend/layouts/NavbarInviteFriend.tsx
  54:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/invite-friend/molecules/SocialButtonGroup.tsx
  40:47  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/components/invite-friend/organisms/GachaSection.tsx
  55:9  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/invite-friend/organisms/HistoryModal.tsx
  19:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/invite-friend/organisms/InviteFriendsBox.tsx
  34:30  error  Parsing error: Unexpected token as

/Users/noon/Work/tosm-activity/src/components/invite-friend/organisms/MileStoneSection.tsx
  50:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/layouts/Footer.stories.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/layouts/Footer.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/layouts/MainLayout.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/layouts/Navbar.tsx
  16:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/presale/atoms/Box.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/atoms/Button.tsx
  5:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/atoms/CharacterNameBadge.tsx
  14:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/presale/atoms/Counter.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/atoms/CustomSelect.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/atoms/ItemBox.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/atoms/LoadingBadge.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/data/presaleBoardGame.mock.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/presale/molecules/BoxOpenItem.tsx
  10:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/molecules/SectionHeaderCenterColumn.tsx
  12:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/presale/molecules/SectionHeaderLeftColumn.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/molecules/SectionHeaderRightColumn.tsx
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/molecules/SpenderItem.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/molecules/WalkButton.tsx
  10:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/components/presale/molecules/board/BoardCell.tsx
  8:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/molecules/history/BoxRewardItem.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/molecules/history/HistoryHeader.tsx
  9:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/presale/molecules/history/HistoryTabs.tsx
  10:6  error  Parsing error: Unexpected token TabKey

/Users/noon/Work/tosm-activity/src/components/presale/molecules/history/HistoryWalkItem.tsx
  6:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/molecules/history/Pagination.tsx
  5:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/molecules/history/tabs/BoardRewardsTab.tsx
  11:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/molecules/history/tabs/BoxRewardsTab.tsx
  11:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/molecules/history/tabs/MysticalShopTab.tsx
  10:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/LoginBanner.tsx
  18:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/presale/organisms/MilestoneProgress.tsx
  12:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/OffcanvasMileage.tsx
  13:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/OverlayNoCharacter.tsx
  3:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/PresaleNavbar.tsx
  26:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/presale/organisms/Wrapper.tsx
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/board/PresaleGameBoard.tsx
  6:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/history/HistoryContent.tsx
  10:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/PresaleModals.tsx
  11:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/board/BoardModals.tsx
  15:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/board/ModalNoReward.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/board/ModalNoSP.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/board/ModalWalk.tsx
  10:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/board/ModalWalkResult.tsx
  8:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/box/BoxModals.tsx
  19:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/box/ModalBeforeOpenBox.tsx
  20:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/box/ModalItemDetail.tsx
  10:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/box/ModalItemList.tsx
  9:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/box/ModalOpenBox.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/box/ModalOpenBoxError.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/box/ModalOpenBoxResult.tsx
  8:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/box/ModalShop.tsx
  14:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/milestone/MilestoneModals.tsx
  16:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/milestone/ModalMilestoneDetail.tsx
  9:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/milestone/ModalMilestoneError.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/milestone/ModalRewardMilestone.tsx
  7:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/milestone/ModalUnableReward.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/obt/ModalClaimAlert.tsx
  10:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/obt/ModalRewardOBT.tsx
  17:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/obt/ModalWaitOBTReward.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/obt/OBTModals.tsx
  15:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/shared/InfoModals.tsx
  24:5  error  Parsing error: Unexpected token <

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/shared/ModalDetailBoard.tsx
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/shared/ModalDetailTP.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/shared/ModalHowToPlay.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/shared/ModalMessage.tsx
  9:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/modals/shared/ModalSelectCharacter.tsx
  16:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/sections/DiamondBoxModal.tsx
  20:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/sections/PresaleBoardSection.tsx
  5:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/sections/PresaleGachaSection.tsx
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/organisms/sections/SectionBody.tsx
  15:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/sections/SectionFooter.tsx
  11:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/components/presale/organisms/sections/SectionHeader.tsx
  10:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/components/presale/templates/PresaleTemplate.tsx
  29:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/configs/cdn.config.ts
  4:32  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/configs/daily-login.config.ts
  7:3  error  Parsing error: Unexpected token as

/Users/noon/Work/tosm-activity/src/configs/invite-friend.config.ts
  28:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/configs/presale.config.ts
  7:3  error  Parsing error: Unexpected token as

/Users/noon/Work/tosm-activity/src/configs/rank.config.ts
  3:3  error  Parsing error: Unexpected token as

/Users/noon/Work/tosm-activity/src/configs/swr.config.ts
  5:6  error  Parsing error: Unexpected token FetcherOptions

/Users/noon/Work/tosm-activity/src/configs/testing.config.ts
  61:5  error  Parsing error: Unexpected token as

/Users/noon/Work/tosm-activity/src/configs/wallet.config.ts
  9:3  error  Parsing error: Unexpected token as

/Users/noon/Work/tosm-activity/src/constants/presale.ts
  13:3  error  Parsing error: Unexpected token as

/Users/noon/Work/tosm-activity/src/constants/role.ts
  5:20  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/contexts/AudioContext.tsx
  10:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/contexts/AuthContext.tsx
  21:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/contexts/DailyLoginContext.tsx
  8:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/contexts/GachaContext.tsx
  5:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/contexts/GuildFundContext.tsx
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/contexts/PresaleModalContext.tsx
  5:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/contexts/TreasureContext.tsx
  5:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/contexts/TreasureWalletContext.tsx
  5:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/contexts/guild-fund/CharacterContext.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/contexts/guild-fund/ExchangeContext.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/contexts/guild-fund/GuildInfoContext.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/contexts/guild-fund/HistoryContext.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/contexts/guild-fund/ModalContext.tsx
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/contexts/guild-fund/ProductContext.tsx
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/contexts/guild-fund/type.ts
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/enums/activity.enum.ts
  1:1  error  Parsing error: The keyword 'enum' is reserved

/Users/noon/Work/tosm-activity/src/enums/currency.enum.ts
  1:8  error  Parsing error: Unexpected token enum

/Users/noon/Work/tosm-activity/src/enums/events/navbar.enum.ts
  1:1  error  Parsing error: The keyword 'enum' is reserved

/Users/noon/Work/tosm-activity/src/enums/events/treasure.enum.ts
  1:8  error  Parsing error: Unexpected token enum

/Users/noon/Work/tosm-activity/src/enums/gacha.enum.ts
  1:1  error  Parsing error: The keyword 'enum' is reserved

/Users/noon/Work/tosm-activity/src/enums/guild-fund.enum.ts
  1:8  error  Parsing error: Unexpected token enum

/Users/noon/Work/tosm-activity/src/enums/invite-friend.enum.ts
  1:1  error  Parsing error: The keyword 'enum' is reserved

/Users/noon/Work/tosm-activity/src/enums/item.enum.ts
  1:1  error  Parsing error: The keyword 'enum' is reserved

/Users/noon/Work/tosm-activity/src/enums/session.enum.ts
  1:1  error  Parsing error: The keyword 'enum' is reserved

/Users/noon/Work/tosm-activity/src/hooks/auth/useAuthDataLoader.ts
  11:23  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/auth/useTestUserAuth.ts
  6:9  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/characters-leveling/useGetInfo.tsx
  31:43  error  Parsing error: Unexpected token as

/Users/noon/Work/tosm-activity/src/hooks/characters-leveling/useGetReward.tsx
  10:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/characters-leveling/useStampReward.tsx
  20:8  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/daily-login-cbt/useCheckInCbt.tsx
  27:19  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/daily-login-cbt/useCheckInTestCbt.tsx
  42:19  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/daily-login-cbt/useClaimRewardCbt.tsx
  23:8  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/daily-login-cbt/useGetActiveRewardCbt.tsx
  8:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/daily-login-cbt/useGetClaimableRewardCbt.tsx
  8:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/daily-login-cbt/useGetDailyInfoCbt.tsx
  7:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/daily-login-cbt/useGetRewardListCbt.tsx
  7:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/daily-login/useCheckIn.tsx
  30:19  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/daily-login/useCheckInTest.tsx
  44:19  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/daily-login/useClaimReward.tsx
  24:8  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/daily-login/useGetActiveReward.tsx
  8:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/daily-login/useGetClaimableReward.tsx
  8:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/daily-login/useGetDailyInfo.tsx
  6:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/daily-login/useGetRewardList.tsx
  7:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/events/gacha/useGachaPageLogic.ts
  16:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/hooks/events/gacha/useGetGachaCount.ts
  8:13  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/events/gacha/useGetGachaInfo.ts
  7:36  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/events/gacha/useGetGachaList.ts
  7:36  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/events/gacha/useGetShopHistory.ts
  10:13  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/events/treasure/useGetBoard.ts
  9:13  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/events/treasure/useGetLuckyUser.ts
  7:36  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/events/useGetAllEventsInfo.ts
  11:7  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/events/useGetEventHistory.ts
  10:13  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/events/useGetEventInfo.ts
  11:7  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/events/useGetEventShop.ts
  9:33  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/events/useGetEventToast.ts
  9:37  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/events/useGetEventWallet.ts
  10:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/hooks/guild-fund/useGetCharacters.ts
  11:78  error  Parsing error: Unexpected token ]

/Users/noon/Work/tosm-activity/src/hooks/guild-fund/useGetGuildFundLogs.ts
  8:14  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/guild-fund/useGetGuildInfo.tsx
  10:72  error  Parsing error: Unexpected token ]

/Users/noon/Work/tosm-activity/src/hooks/guild-fund/useGetProducts.ts
  5:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/guild-fund/useGetPurchaseLogByID.ts
  8:14  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/guild-fund/useGetPurchaseLogs.ts
  9:14  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/guild-fund/useGetRewards.ts
  7:30  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/guild-fund/usePostPurchase.ts
  10:41  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/guild-fund/usePostRedeem.ts
  11:37  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/invite-friend/useGetRedeemEvents.tsx
  37:21  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/invite-friend/usePurchaseGacha.tsx
  8:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/member/useGetCurrentUserProfile.tsx
  11:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/hooks/member/useGetCurrentWallets.tsx
  10:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/hooks/member/useGetWalletTransactions.tsx
  10:2  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/presale/useCheckSendItem.tsx
  7:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/presale/useClaimOBTReward.tsx
  19:8  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/presale/useGachaponRemaining.tsx
  8:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/presale/useMySpenderInfo.tsx
  7:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/presale/useOpenExistingBox.tsx
  13:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/presale/usePresaleData.tsx
  8:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/presale/usePresaleStampList.tsx
  10:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/presale/usePresaleWalk.tsx
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/presale/usePurchaseBox.tsx
  12:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/presale/useStamp.tsx
  9:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/presale/useStepCurrentProduct.tsx
  7:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/presale/useStepProducts.tsx
  7:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/presale/useTopSpenders.tsx
  7:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/presale/useWalletLoadingState.tsx
  8:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/hooks/useCharacterSelection.tsx
  6:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/useCountdown.tsx
  6:36  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/useCountdownTimer.tsx
  4:13  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/useGetCharacters.tsx
  11:45  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/useGetServers.ts
  7:42  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/hooks/useGlobalAudio.tsx
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/useModal.tsx
  4:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/hooks/useOAuthCallback.ts
  12:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/hooks/useRedeem.tsx
  8:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/hooks/useSound.tsx
  3:23  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/proxy.ts
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/reducer/guild-fund.ts
  3:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/services/characters-leveling.service.ts
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/services/daily-login-cbt.service.ts
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/services/daily-login.service.ts
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/services/event.service.ts
  8:9  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/services/events/gacha.service.ts
  7:15  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/services/events/shop.service.ts
  7:15  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/services/events/treasure.service.ts
  8:15  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/services/events/wheel.service.ts
  8:15  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/services/gacha.service.ts
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/services/games.service.ts
  8:25  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/services/guild-fund.service.ts
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/services/invite-friend.service.ts
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/services/pre-register.service.ts
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/services/presale.service.ts
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/services/redeem.service.ts
  2:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/services/wallet.service.ts
  7:19  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/stores/access-token/typeUserAccessToken.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/stores/access-token/userAccessToken.ts
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/stores/character/typeCharacter.ts
  3:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/stores/character/useSelectedCharacterStore.ts
  24:65  error  Parsing error: Unexpected token )

/Users/noon/Work/tosm-activity/src/stores/character/useShowSelectedCharacter.ts
  3:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/stores/gacha/useGachaStore.ts
  3:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/stores/guild-fund/typeGuildFundCharacter.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/stores/guild-fund/typeGuildFundStatus.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/stores/guild-fund/typeGuildFundStore.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/stores/guild-fund/useGuildFundStatus.ts
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/stores/guild-fund/useGuildFundStore.ts
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/stores/guild-fund/useSelectedGuildFundCharacterStore.ts
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/stores/pre-login/typePreLogin.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/stores/pre-login/usePreLogin.ts
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/stores/profile/typeProfile.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/stores/profile/useProfile.ts
  4:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/stores/sound/typeSound.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/stores/sound/useSound.ts
  4:44  error  Parsing error: Unexpected token )

/Users/noon/Work/tosm-activity/src/stores/wallet-loading/useWalletLoadingStore.ts
  3:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/api.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/character/character.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/character/servers.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/characters-leveling/info.interface.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/types/css/css.d.ts
  1:9  error  Parsing error: Unexpected token module

/Users/noon/Work/tosm-activity/src/types/daily-login/daily-info.interface.ts
  5:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/types/daily-login/data.interface.d.ts
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/types/event/history.interface.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/event/info.interface.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/event/purchase.interface.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/event/shop.interface.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/events/activity.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/events/gacha/index.d.ts
  2:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/events/info.interface.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/types/events/lucky.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/events/navbar.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/events/product.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/events/shop.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/events/treasure/board.interface.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/events/treasure/info.interface.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/events/treasure/lucky.interface.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/events/treasure/play.interface.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/events/wheel/info.interface.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/events/wheel/lucky.interface.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/events/wheel/play.interface.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/events/wheel/wheel.interface.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/guild-fund/guild-characters.interface.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/guild-fund/guild-fund-log.interface.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/guild-fund/guild-fund-purchase-log.interface.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/guild-fund/guild-fund-purchased.interface.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/guild-fund/guild-fund-status.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/guild-fund/guild-info.interface.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/guild-fund/item.interface.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/guild-fund/product.interface.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/guild-fund/reward.interface.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/images/preview.interface.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/types/invite-friend/data.interface.d.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/types/invite-friend/gacha.interface.d.ts
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/types/invite-friend/history.interface.ts
  5:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/types/invite-friend/redeem.interface.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/member/profile.interface.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/types/member/wallets.interface.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/types/pre-register.interface.d.ts
  1:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/types/presale/data.interface.d.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/types/presale/modals.interface.ts
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/types/presale/presale.type.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/types/presale/shared.types.d.ts
  1:8  error  Parsing error: Unexpected token type

/Users/noon/Work/tosm-activity/src/types/shared/bundle.interface.ts
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/types/shared/event.interface.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/types/shared/item.interface.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/types/shared/redeem.interface.ts
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/types/shared/reward.interface.ts
  1:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/types/shared/ui.interface.ts
  1:8  error  Parsing error: Unexpected token interface

/Users/noon/Work/tosm-activity/src/utils/auth/auth-cookies.ts
  2:6  error  Parsing error: Unexpected token SameSite

/Users/noon/Work/tosm-activity/src/utils/auth/oauth.ts
  7:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/utils/auth/refresh-token.ts
  10:1  error  Parsing error: The keyword 'interface' is reserved

/Users/noon/Work/tosm-activity/src/utils/dayjs.ts
  10:23  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/utils/device.ts
  1:23  error  Parsing error: Unexpected token )

/Users/noon/Work/tosm-activity/src/utils/fetcher.ts
  6:19  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/utils/format.ts
  5:33  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/utils/image.ts
  2:13  error  Parsing error: Unexpected token {

/Users/noon/Work/tosm-activity/src/utils/item.ts
  3:38  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/utils/localStorage.ts
  5:14  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/utils/sessionStorage.ts
  6:7  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/utils/swal/InviteFriendSwal.tsx
  11:8  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/utils/swal/dailyLoginSwal.tsx
  38:44  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/utils/swal/guildFundSwal.tsx
  3:43  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/utils/swal/index.tsx
  5:16  error  Parsing error: Unexpected token :

/Users/noon/Work/tosm-activity/src/utils/url.ts
  3:39  error  Parsing error: Unexpected token :

✖ 599 problems (599 errors, 0 warnings)
```

---

## Prettier

**Description**: Code formatting validation

**Status**: ❌ **FAILED**

**Output**:
```
Checking formatting...
```

---

## Knip

**Description**: Dead code detection

**Status**: ❌ **FAILED**

**Output**:
```
Unused files (74)
eslint.config.mjs                                                            
public/js/scroll.js                                                          
public/js/slotanimate.js                                                     
public/js/slotsound.js                                                       
public/wishing-night-treasure/sass-ev-treasure/sass/colors.sass              
public/wishing-night-treasure/sass-ev-treasure/sass/ev-animation.sass        
public/wishing-night-treasure/sass-ev-treasure/sass/ev-style-screen.sass     
public/wishing-night-treasure/sass-ev-treasure/sass/ev-style.sass            
public/wishing-night-treasure/sass-ev-treasure/sass/ie.sass                  
public/wishing-night-treasure/sass-ev-treasure/sass/jquery-ui.sass           
public/wishing-night-treasure/sass-ev-treasure/sass/main-ev.sass             
public/wishing-night-treasure/sass-ev-treasure/sass/main.sass                
public/wishing-night-treasure/sass-ev-treasure/sass/mixin.sass               
public/wishing-night-treasure/sass-ev-treasure/sass/print.sass               
public/wishing-night-treasure/sass-ev-treasure/sass/screen.sass              
public/wishing-night-treasure/sass-ev-treasure/sass/theme.sass               
src/components/daily-login-cbt/atoms/Item.tsx                                
src/components/daily-login-cbt/molecules/CustomSelect.tsx                    
src/components/daily-login/atoms/CustomSelect.tsx                            
src/components/daily-login/atoms/ItemLevel.tsx                               
src/components/daily-login/atoms/SpecialTag.tsx                              
src/components/daily-login/molecules/modals/SuccessClaimModal.tsx            
src/components/events/gacha/organisms/modals/ModalGachaReward.tsx            
src/components/events/general/modals/ModalCharacterNotFound/index.tsx        
src/components/events/general/modals/ModalEventBase/index.tsx                
src/components/events/general/TooltipQuestion.tsx                            
src/components/events/guild-fund/molecules/BoxPointReceive.tsx               
src/components/events/treasure/ayothaya/Common/CurrencyBar/types.ts          
src/components/events/treasure/ayothaya/Common/DateDisplay/index.ts          
src/components/events/treasure/ayothaya/Common/Pagination/index.ts           
src/components/events/treasure/ayothaya/Common/ProductCard/BuyButton/index.ts
src/components/events/treasure/ayothaya/Common/ProductCard/index.ts          
src/components/events/treasure/ayothaya/Common/Table/index.ts                
src/components/events/treasure/ayothaya/Common/Table/LuckyUserTable/index.ts 
src/components/events/treasure/ayothaya/Common/Title/index.ts                
src/components/events/treasure/ayothaya/Features/History/Filter/index.ts     
src/components/events/treasure/ayothaya/Features/History/Filter/mocks.ts     
src/components/events/treasure/ayothaya/Features/History/index.ts            
src/components/events/treasure/ayothaya/Features/History/Tabs/index.ts       
src/components/events/treasure/ayothaya/Features/LuckyUser/index.ts          
src/components/events/treasure/ayothaya/Templates/index.ts                   
src/components/events/treasure/ayothaya/UI/BackButton/index.ts               
src/components/events/treasure/ayothaya/UI/MainButton/index.ts               
src/components/events/treasure/MenuRight.tsx                                 
src/components/general/RedirectToLogin.tsx                                   
src/components/general/swal/SwalErrorBox.tsx                                 
src/components/general/SweetAlert2.tsx                                       
src/components/presale/atoms/Box.tsx                                         
src/components/presale/atoms/ItemBox.tsx                                     
src/contexts/_WheelContext.tsx                                               
src/hooks/events/gacha/useGetGachaInfo.ts                                    
src/hooks/events/gacha/useGetGachaList.ts                                    
src/hooks/events/useGetAllEventsInfo.ts                                      
src/hooks/member/useGetWalletTransactions.tsx                                
src/hooks/pre-register/usePreRegister.tsx                                    
src/services/events/shop.service.ts                                          
src/services/events/wheel.service.ts                                         
src/services/pre-register.service.ts                                         
src/tests/gacha/test-jackpot.js                                              
src/tests/gacha/test-jackpot2.js                                             
src/types/event/history.interface.ts                                         
src/types/event/info.interface.ts                                            
src/types/event/purchase.interface.ts                                        
src/types/event/shop.interface.ts                                            
src/types/events/info.interface.ts                                           
src/types/events/treasure/board.interface.ts                                 
src/types/events/treasure/info.interface.ts                                  
src/types/events/treasure/lucky.interface.ts                                 
src/types/events/treasure/play.interface.ts                                  
src/types/events/wheel/info.interface.ts                                     
src/types/events/wheel/lucky.interface.ts                                    
src/types/events/wheel/play.interface.ts                                     
src/types/events/wheel/wheel.interface.ts                                    
src/utils/auth/index.ts                                                      
Unused dependencies (1)
base64-arraybuffer  package.json:34:6
Unused devDependencies (6)
@chromatic-com/storybook  package.json:53:6
@eslint/eslintrc          package.json:54:6
@next/eslint-plugin-next  package.json:55:6
@vitest/coverage-v8       package.json:65:6
chalk                     package.json:67:6
eslint-config-next        package.json:69:6
Unlisted binaries (4)
eslint    package.json
prettier  package.json
tsc       package.json
knip      package.json
Unused exports (106)
getBasePaths              function  .storybook/utils/pathUtils.ts:27:17                                                 
isValidAlias              function  .storybook/utils/pathUtils.ts:31:17                                                 
resolveMultiplePaths      function  .storybook/utils/pathUtils.ts:35:17                                                 
createPathResolver        function  .storybook/utils/pathUtils.ts:41:17                                                 
dailyLoginImage                     src/app/(events)/daily-login/[slug]/utils.ts:16:14                                  
useDailyLoginAsset                  src/app/(events)/daily-login/[slug]/utils.ts:39:14                                  
formatPeriod                        src/app/(events)/treasure/[slug]/config.ts:3:14                                     
transformHistoryDataGro…            src/app/invite-friend/utils.ts:71:14                                                
getInitialFrameImageUrl             src/app/presale/utils.ts:46:14                                                      
getLightAnimationFrames             src/app/presale/utils.ts:118:14                                                     
getSocialEventIDFormEve…            src/components/characters-leveling/utils.ts:14:14                                   
ModalConfirmBuyShop                 src/components/events/guild-fund/modal/lazyModals.ts:7:14                           
ModalShopServerError                src/components/events/guild-fund/modal/lazyModals.ts:34:14                          
guildFundMapStatus                  src/components/events/guild-fund/utils.ts:80:3                                      
default                             src/components/events/treasure/ayothaya/Common/Pagination/Main.tsx:337:16           
createMockPagination                src/components/events/treasure/ayothaya/Common/Pagination/mocks.ts:3:14             
mockPagination                      src/components/events/treasure/ayothaya/Common/Pagination/mocks.ts:18:14            
default                             …reasure/ayothaya/Common/Table/HistoryTable/SupComponents/ServerCharacter.tsx:150:16
mockTitleVariants                   src/components/events/treasure/ayothaya/Common/Title/mocks.ts:3:14                  
ServerSelector                      src/components/events/treasure/ayothaya/Features/History/Filter/Main.tsx:52:14      
CharacterSelector                   src/components/events/treasure/ayothaya/Features/History/Filter/Main.tsx:72:14      
DefaultContent                      src/components/events/treasure/ayothaya/Features/History/Filter/Main.tsx:97:14      
default                             src/components/events/treasure/ayothaya/Features/History/Main.tsx:30:16             
Tab                                 src/components/events/treasure/ayothaya/Features/History/Tabs/Main.tsx:81:14        
DefaultContent                      src/components/events/treasure/ayothaya/Features/History/Tabs/Main.tsx:104:14       
default                             src/components/events/treasure/ayothaya/Features/LuckyUser/Main.tsx:20:16           
default                             src/components/events/treasure/ayothaya/Features/Shop/Main.tsx:25:16                
BREAKPOINTS                         src/components/events/treasure/ayothaya/hooks/useResponsive.ts:79:14                
useResponsive                       src/components/events/treasure/ayothaya/hooks/useResponsive.ts:124:14               
useIsMobile                         src/components/events/treasure/ayothaya/hooks/useResponsive.ts:210:14               
isClient                            src/components/events/treasure/ayothaya/hooks/useResponsive.ts:216:14               
isCustomBreakpoint                  src/components/events/treasure/ayothaya/hooks/useResponsive.ts:219:14               
getBreakpointValue                  src/components/events/treasure/ayothaya/hooks/useResponsive.ts:226:14               
getProductById                      src/components/events/treasure/ayothaya/mocks/products.ts:95:14                     
getProductsByCurrency               src/components/events/treasure/ayothaya/mocks/products.ts:99:14                     
getGoldProducts                     src/components/events/treasure/ayothaya/mocks/products.ts:107:14                    
getKeyProducts                      src/components/events/treasure/ayothaya/mocks/products.ts:111:14                    
getAffordableProducts               src/components/events/treasure/ayothaya/mocks/products.ts:115:14                    
getRandomProduct                    src/components/events/treasure/ayothaya/mocks/products.ts:132:14                    
productsByCategory                  src/components/events/treasure/ayothaya/mocks/products.ts:138:14                    
productsByPriceRange                src/components/events/treasure/ayothaya/mocks/products.ts:162:14                    
default                             src/components/events/treasure/ayothaya/mocks/products.ts:180:16                    
CURRENCY_ICONS                      src/components/events/treasure/ayothaya/types/currency.ts:77:14                     
CURRENCY_LABELS                     src/components/events/treasure/ayothaya/types/currency.ts:78:14                     
DEFAULT_CURRENCY                    src/components/events/treasure/ayothaya/types/currency.ts:79:14                     
isValidCurrency                     src/components/events/treasure/ayothaya/types/currency.ts:82:14                     
default                             src/components/events/treasure/ayothaya/UI/Badges/Rarity.tsx:214:16                 
Amount                              src/components/events/treasure/ayothaya/UI/CurrencyBox/CurrencyBox.tsx:108:14       
Icon                                src/components/events/treasure/ayothaya/UI/CurrencyBox/CurrencyBox.tsx:131:14       
DefaultContent                      src/components/events/treasure/ayothaya/UI/CurrencyBox/CurrencyBox.tsx:146:14       
default                   variable  src/components/events/treasure/ayothaya/UI/CurrencyBox/CurrencyBox.tsx:167:16       
Amount                              src/components/events/treasure/ayothaya/UI/CurrencyBox/index.ts:2:10                
Icon                                src/components/events/treasure/ayothaya/UI/CurrencyBox/index.ts:2:18                
DefaultContent                      src/components/events/treasure/ayothaya/UI/CurrencyBox/index.ts:2:24                
mockCallbacks                       src/components/events/treasure/ayothaya/UI/CurrencyBox/mocks.ts:14:14               
mockCurrencies                      src/components/events/treasure/ayothaya/UI/CurrencyIcon/index.ts:3:10               
mockProps                           src/components/events/treasure/ayothaya/UI/CurrencyIcon/index.ts:3:26               
formatDateQuick                     src/components/events/treasure/ayothaya/utils/formatDate.ts:351:14                  
formatDateOnly                      src/components/events/treasure/ayothaya/utils/formatDate.ts:358:14                  
formatTimeOnly                      src/components/events/treasure/ayothaya/utils/formatDate.ts:369:14                  
formatDateQuick                     src/components/events/treasure/ayothaya/utils/index.ts:4:3                          
formatDateOnly                      src/components/events/treasure/ayothaya/utils/index.ts:5:3                          
formatTimeOnly                      src/components/events/treasure/ayothaya/utils/index.ts:6:3                          
HistoryModal                        src/components/invite-friend/organisms/index.ts:6:24                                
Navbar                              src/components/layouts/index.ts:4:18                                                
LoadingBadge                        src/components/presale/atoms/LoadingBadge.tsx:28:14                                 
default                             src/components/presale/organisms/PresaleNavbar.tsx:210:16                           
TESTING_CONFIG                      src/configs/testing.config.ts:19:14                                                 
isAllowedUser             function  src/configs/testing.config.ts:78:17                                                 
isAllowedTestingUser                src/configs/testing.config.ts:95:14                                                 
AudioProvider                       src/contexts/AudioContext.tsx:27:14                                                 
CURRENCY_META                       src/enums/currency.enum.ts:21:14                                                    
getCurrencyIconUrl                  src/enums/currency.enum.ts:61:14                                                    
useAuthDataLoader                   src/hooks/auth/index.ts:1:10                                                        
default                             src/hooks/daily-login-cbt/useCheckInCbt.tsx:37:16                                   
default                             src/hooks/daily-login-cbt/useCheckInTestCbt.tsx:111:16                              
default                             src/hooks/daily-login-cbt/useClaimRewardCbt.tsx:91:16                               
default                             src/hooks/daily-login-cbt/useGetDailyInfoCbt.tsx:30:16                              
default                             src/hooks/daily-login/useCheckIn.tsx:40:16                                          
default                             src/hooks/daily-login/useCheckInTest.tsx:113:16                                     
default                             src/hooks/daily-login/useClaimReward.tsx:93:16                                      
usePostPurchase                     src/hooks/guild-fund/usePostPurchase.ts:10:14                                       
usePostRedeem                       src/hooks/guild-fund/usePostRedeem.ts:11:14                                         
processProfileData                  src/hooks/member/useGetCurrentUserProfile.tsx:82:14                                 
default                             src/hooks/presale/useClaimOBTReward.tsx:106:16                                      
default                             src/hooks/presale/useOpenExistingBox.tsx:240:16                                     
usePurchaseBox                      src/hooks/presale/usePurchaseBox.tsx:28:14                                          
default                             src/hooks/presale/useWalletLoadingState.tsx:62:16                                   
default                             src/hooks/useCharacterSelection.tsx:159:16                                          
useGlobalAudio            function  src/hooks/useGlobalAudio.tsx:192:17                                                 
RedeemService                       src/services/redeem.service.ts:9:14                                                 
isTokenExpiredFromCooki…  function  src/utils/auth/auth-cookies.ts:178:17                                               
clearOAuthState           function  src/utils/auth/oauth.ts:91:17                                                       
markCodeAsUsed            function  src/utils/auth/oauth.ts:99:17                                                       
forceRefreshToken         function  src/utils/auth/refresh-token.ts:177:23                                              
isTokenExpired            function  src/utils/auth/refresh-token.ts:192:17                                              
isRefreshTokenValid       function  src/utils/auth/refresh-token.ts:204:17                                              
getRefreshAttemptStats    function  src/utils/auth/refresh-token.ts:214:17                                              
getDate                             src/utils/dayjs.ts:55:10                                                            
getDateDayjs                        src/utils/dayjs.ts:55:33                                                            
numberCompactFormatted              src/utils/format.ts:101:3                                                           
dailyLoginSuccessSwal               src/utils/swal/dailyLoginSwal.tsx:16:14                                             
dailyLoginNotBuySwal                src/utils/swal/dailyLoginSwal.tsx:52:14                                             
successPreRegisteredSwal            src/utils/swal/index.tsx:48:14                                                      
failedLoadCharactersSwal            src/utils/swal/index.tsx:93:14                                                      
alertSelectCharacter                src/utils/swal/InviteFriendSwal.tsx:82:14                                           
Unused exported types (60)
IWheelConfig            interface  src/app/(events)/treasure/[slug]/wheel/useWheelGame.ts:19:18                         
PriceTagProps           type       …ponents/events/treasure/ayothaya/Common/ProductCard/BuyButton/PriceTag/index.ts:2:15
PriceTagProps           interface  …onents/events/treasure/ayothaya/Common/ProductCard/BuyButton/PriceTag/Main.tsx:14:18
ProductCardProps        interface  src/components/events/treasure/ayothaya/Common/ProductCard/Main.tsx:7:18             
ServerCharacterProps    type       …onents/events/treasure/ayothaya/Common/Table/HistoryTable/SupComponents/index.ts:6:3
ServerCharacterSize     type       …onents/events/treasure/ayothaya/Common/Table/HistoryTable/SupComponents/index.ts:7:3
ServerCharacterSize     type       …s/treasure/ayothaya/Common/Table/HistoryTable/SupComponents/ServerCharacter.tsx:3:13
ServerCharacterProps    interface  …s/treasure/ayothaya/Common/Table/HistoryTable/SupComponents/ServerCharacter.tsx:5:18
TitleVariant            type       src/components/events/treasure/ayothaya/Common/Title/Main.tsx:3:13                   
FilterProps             interface  src/components/events/treasure/ayothaya/Features/History/Filter/Main.tsx:17:18       
Breakpoint              type       src/components/events/treasure/ayothaya/hooks/useResponsive.ts:86:13                 
CustomBreakpoint        type       src/components/events/treasure/ayothaya/hooks/useResponsive.ts:87:13                 
FrameProps              interface  src/components/events/treasure/ayothaya/Templates/Frame/Main.tsx:5:18                
CurrencyData            interface  src/components/events/treasure/ayothaya/types/currency.ts:5:18                       
BaseCurrencyComponent…  interface  src/components/events/treasure/ayothaya/types/currency.ts:16:18                      
RarityProps             type       src/components/events/treasure/ayothaya/UI/Badges/index.ts:2:15                      
RaritySize              type       src/components/events/treasure/ayothaya/UI/Badges/index.ts:2:40                      
RaritySize              type       src/components/events/treasure/ayothaya/UI/Badges/Rarity.tsx:4:13                    
RarityProps             interface  src/components/events/treasure/ayothaya/UI/Badges/Rarity.tsx:6:18                    
CurrencyIconProps       type       src/components/events/treasure/ayothaya/UI/CurrencyIcon/index.ts:2:15                
CurrencyVariant         type       src/components/events/treasure/ayothaya/UI/CurrencyIcon/index.ts:2:34                
CurrencyVariant         type       src/components/events/treasure/ayothaya/UI/CurrencyIcon/types.ts:3:13                
CurrencyIconProps       interface  src/components/events/treasure/ayothaya/UI/CurrencyIcon/types.ts:5:18                
FormatDateOptions       interface  src/components/events/treasure/ayothaya/utils/formatDate.ts:19:18                    
FormattedDateResult     interface  src/components/events/treasure/ayothaya/utils/formatDate.ts:29:18                    
FormatDateOptions       type       src/components/events/treasure/ayothaya/utils/index.ts:8:15                          
FormattedDateResult     type       src/components/events/treasure/ayothaya/utils/index.ts:8:34                          
HistoryItem             interface  src/components/layouts/Navbar.tsx:16:18                                              
PresaleGameBoardData    interface  src/components/presale/data/presaleBoardGame.mock.ts:19:18                           
WalkButtonProps         interface  src/components/presale/molecules/WalkButton.tsx:10:18                                
DiamondShopProduct      interface  src/components/presale/organisms/sections/DiamondBoxModal.tsx:27:18                  
IDailyLoginContext      interface  src/contexts/DailyLoginContext.tsx:8:18                                              
ModeData                interface  src/contexts/PresaleModalContext.tsx:8:18                                            
PresaleModalContextVa…  interface  src/contexts/PresaleModalContext.tsx:22:18                                           
ITreasureWalletState    interface  src/contexts/TreasureWalletContext.tsx:5:18                                          
ECurrencyKey            enum       src/enums/currency.enum.ts:1:13                                                      
ICurrencyMeta           interface  src/enums/currency.enum.ts:15:18                                                     
FundLogHistory          enum       src/enums/guild-fund.enum.ts:39:13                                                   
StampType               type       src/hooks/presale/useStamp.tsx:14:13                                                 
UseStampReturn          interface  src/hooks/presale/useStamp.tsx:121:18                                                
ActivityInfo            interface  src/types/characters-leveling/info.interface.ts:1:18                                 
PassedCharacter         interface  src/types/characters-leveling/info.interface.ts:9:18                                 
FamilyInfo              interface  src/types/characters-leveling/info.interface.ts:14:18                                
LevelingConfig          interface  src/types/characters-leveling/info.interface.ts:26:18                                
DailyInfoProcessed      interface  src/types/daily-login/daily-info.interface.ts:27:18                                  
PreviewImage            interface  src/types/images/preview.interface.ts:1:18                                           
ApiHistoryItem          interface  src/types/invite-friend/history.interface.ts:5:18                                    
ApiHistoryResponse      interface  src/types/invite-friend/history.interface.ts:26:18                                   
UserProfile             interface  src/types/member/profile.interface.ts:1:18                                           
WalletData              interface  src/types/member/wallets.interface.ts:1:18                                           
BoxItem                 interface  src/types/presale/modals.interface.ts:6:18                                           
Milestone               interface  src/types/presale/modals.interface.ts:23:18                                          
PresaleBundleItem       interface  src/types/presale/presale.type.ts:17:18                                              
PresaleHistoryResponse  interface  src/types/presale/presale.type.ts:125:18                                             
BaseBundleItem          interface  src/types/shared/bundle.interface.ts:3:18                                            
BaseBundle              interface  src/types/shared/bundle.interface.ts:26:18                                           
BaseItem                interface  src/types/shared/item.interface.ts:1:18                                              
EventDetails            type       src/types/shared/redeem.interface.ts:44:3                                            
RewardDetails           type       src/types/shared/redeem.interface.ts:47:3                                            
LocalStorage            type       src/utils/localStorage.ts:31:13                                                      
Unused exported enum members (2)
ConfirmBuyShop   ModalKey  src/enums/guild-fund.enum.ts:8:3 
ShopServerError  ModalKey  src/enums/guild-fund.enum.ts:10:3
Duplicate exports (31)
Pagination|default               src/components/events/treasure/ayothaya/Common/Pagination/Main.tsx                     
ServerCharacter|default          …s/events/treasure/ayothaya/Common/Table/HistoryTable/SupComponents/ServerCharacter.tsx
Title|default                    src/components/events/treasure/ayothaya/Common/Title/Main.tsx                          
History|default                  src/components/events/treasure/ayothaya/Features/History/Main.tsx                      
LuckyUser|default                src/components/events/treasure/ayothaya/Features/LuckyUser/Main.tsx                    
Shop|default                     src/components/events/treasure/ayothaya/Features/Shop/Main.tsx                         
mockProducts|default             src/components/events/treasure/ayothaya/mocks/products.ts                              
Rarity|default                   src/components/events/treasure/ayothaya/UI/Badges/Rarity.tsx                           
LoadingBadge|default             src/components/presale/atoms/LoadingBadge.tsx                                          
PresaleNavbar|default            src/components/presale/organisms/PresaleNavbar.tsx                                     
isAllowedUser|isAllowedTesting…  src/configs/testing.config.ts                                                          
useCheckInCbt|default            src/hooks/daily-login-cbt/useCheckInCbt.tsx                                            
useCheckInTestCbt|default        src/hooks/daily-login-cbt/useCheckInTestCbt.tsx                                        
useClaimRewardCbt|default        src/hooks/daily-login-cbt/useClaimRewardCbt.tsx                                        
useGetActiveRewardCbt|default    src/hooks/daily-login-cbt/useGetActiveRewardCbt.tsx                                    
useGetClaimableRewardCbt|defau…  src/hooks/daily-login-cbt/useGetClaimableRewardCbt.tsx                                 
useGetDailyInfoCbt|default       src/hooks/daily-login-cbt/useGetDailyInfoCbt.tsx                                       
useGetRewardListCbt|default      src/hooks/daily-login-cbt/useGetRewardListCbt.tsx                                      
useCheckIn|default               src/hooks/daily-login/useCheckIn.tsx                                                   
useCheckInTest|default           src/hooks/daily-login/useCheckInTest.tsx                                               
useClaimReward|default           src/hooks/daily-login/useClaimReward.tsx                                               
useGetActiveReward|default       src/hooks/daily-login/useGetActiveReward.tsx                                           
useGetClaimableReward|default    src/hooks/daily-login/useGetClaimableReward.tsx                                        
useGetRewardList|default         src/hooks/daily-login/useGetRewardList.tsx                                             
usePostPurchase|default          src/hooks/guild-fund/usePostPurchase.ts                                                
usePostRedeem|default            src/hooks/guild-fund/usePostRedeem.ts                                                  
useClaimOBTReward|default        src/hooks/presale/useClaimOBTReward.tsx                                                
useOpenExistingBox|default       src/hooks/presale/useOpenExistingBox.tsx                                               
useWalletLoadingState|default    src/hooks/presale/useWalletLoadingState.tsx                                            
useCharacterSelection|default    src/hooks/useCharacterSelection.tsx                                                    
RedeemService|default            src/services/redeem.service.ts                                                         
Configuration hints (1)
```

---

## Snyk

**Description**: Security vulnerability scanning

**Status**: ❌ **FAILED**

**Output**:
```
ERROR   Authentication error (SNYK-0005)
         Authentication credentials not recognized, or user access is not provisioned.  
         Revise credentials and try again, or request access from your Snyk             
         administrator.                                                                 
                                                                                        
           Use `snyk auth` to authenticate.                                             

Status:  401 Unauthorized 
Docs:    https://docs.snyk.io/scan-with-snyk/error-catalog#snyk-0005 
                                                                     
ID:      urn:snyk:interaction:1a153974-d9e7-4e86-a223-bbbbfeafbdd7
```

---

## Summary

**Total Checks**: 5
**Passed**: 0
**Failed**: 5

### ❌ Some quality checks failed

**Quick Fix Commands**:
- `bun run lint:fix` — Auto-fix linting issues
- `bun run format:fix` — Auto-format code

---

## For AI Agents

**Failed Checks**: TypeScript, ESLint, Prettier, Knip, Snyk

**Action Required**:
- Fix TypeScript errors
- Fix ESLint errors
- Fix Prettier errors
- Fix Knip errors
- Fix Snyk errors

