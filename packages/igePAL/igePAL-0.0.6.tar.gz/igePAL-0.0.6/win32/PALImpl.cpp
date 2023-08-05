#include "PAL.h"

#include <windows.h> 
#include <wininet.h>
#pragma comment(lib,"Wininet.lib")

void PALImpl::Init()
{
}

void PALImpl::Release()
{
}

bool PALImpl::openAppSettings()
{
    return true;
}

void PALImpl::saveImageToGallery(const char *name)
{
}

bool PALImpl::checkPermission(int permission)
{
	return true;
}

bool PALImpl::isInternetAvailable()
{
	return InternetCheckConnection("http://www.google.com", FLAG_ICC_FORCE_CONNECTION, 0);
}
