export type TagListProps = {
    title: string
    tags: string[]
}

export type HeaderProps = {
  searchClicked: boolean;
  setSearchClicked: React.Dispatch<React.SetStateAction<boolean>>;
};