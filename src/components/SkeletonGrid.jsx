import Skeleton from "@mui/material/Skeleton";

const SkeletonGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-2">
          <div className="w-[300px]">
            <Skeleton variant="rectangle" animation="wave" width="100%" height={366} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
          <div className="w-[300px]">
            <Skeleton variant="rectangle" animation="wave" width="100%" height={366} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
          <div className="w-[300px]">
            <Skeleton variant="rectangle" animation="wave" width="100%" height={366} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
          <div className="w-[300px]">
            <Skeleton variant="rectangle" animation="wave" width="100%" height={366} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
          <div className="w-[300px]">
            <Skeleton variant="rectangle" animation="wave" width="100%" height={366} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
          <div className="w-[300px]">
            <Skeleton variant="rectangle" animation="wave" width="100%" height={366} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
          <div className="w-[300px]">
            <Skeleton variant="rectangle" animation="wave" width="100%" height={366} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
          <div className="w-[300px]">
            <Skeleton variant="rectangle" animation="wave" width="100%" height={366} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
        </div>
  )
}

export default SkeletonGrid