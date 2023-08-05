#include "PAL.h"

PAL *PAL::instance = nullptr;

PAL::PAL()
	: m_PALImpl(new PALImpl()), m_notifyHandlerFunc(nullptr), onDownloadCallBack(nullptr)
{
}
PAL::~PAL()
{
}

void PAL::init()
{
	m_PALImpl->Init();
}

void PAL::release()
{
	m_PALImpl->Release();
}

void PAL::registerNotifyEvent(NotifyHandlerFunc handler)
{
	m_notifyHandlerFunc = handler;
}

void PAL::notifyCallback(NotifyCallback callback)
{
	if (m_notifyHandlerFunc != nullptr)
	{
		m_notifyHandlerFunc(callback);
	}
	else
	{
		m_notifyEvents.push_back(callback);
	}
}

std::vector<NotifyCallback> PAL::pollNotifyEvent()
{
	return m_notifyEvents;
}

void PAL::clearNotifyEvent()
{
	m_notifyEvents.clear();
}

bool PAL::openAppSettings()
{
	return m_PALImpl->openAppSettings();
}

bool PAL::checkPermission(int permission)
{
	return m_PALImpl->checkPermission(permission);
}

bool PAL::isInternetAvailable()
{
    return m_PALImpl->isInternetAvailable();
}
