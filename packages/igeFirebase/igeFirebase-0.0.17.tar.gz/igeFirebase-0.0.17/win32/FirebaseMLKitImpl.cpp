#include "FirebaseMLKitImpl.h"


FirebaseMLKitImpl::FirebaseMLKitImpl()
	: contourPoints(nullptr)
	, rgbData(nullptr)
{
}

FirebaseMLKitImpl::~FirebaseMLKitImpl()
{
}

void FirebaseMLKitImpl::Init(int mode)
{
	if (contourPoints == nullptr)
	{
		contourPoints = new float[allContourPointsSize * 2];
	}
}

void FirebaseMLKitImpl::Release()
{
}

void FirebaseMLKitImpl::Preview()
{
}

float FirebaseMLKitImpl::GetHeadEulerAngleY()
{
	return 0;
}

float FirebaseMLKitImpl::GetHeadEulerAngleZ()
{
	return 0;
}

float* FirebaseMLKitImpl::GetContours(int& size)
{
	return {};
}

uint8_t* FirebaseMLKitImpl::GetCameraData()
{
	int h = GetCameraHeight();
	int w = GetCameraWidth();

	if (rgbData == nullptr)
	{
		size_t len = (size_t)w * h * 3;
		rgbData = new uint8_t[len];
		memset(rgbData, 0, len);
	}

	return rgbData;
}

int FirebaseMLKitImpl::GetCameraWidth()
{
	return 360;
}

int FirebaseMLKitImpl::GetCameraHeight()
{
	return 480;
}