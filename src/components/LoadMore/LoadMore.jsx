import { LoadMoreBtn } from "./LoadMore.styled"

export const LoadMore = ({loadMore}) => {
    return (
        <div>
            <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>
        </div>
    )
}