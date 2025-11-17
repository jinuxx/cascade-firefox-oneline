// 禁止网页访问电池状态信息
user_pref("dom.battery.enabled", false);

// 关闭最后的标签不要关闭浏览器
user_pref("browser.tabs.closeWindowWithLastTab", false);

// 不是用 sync
user_pref("identity.fxaccounts.enabled", false);

// Flash
user_pref("plugin.state.flash", 0);

// 不需要推荐扩展
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// 助残
user_pref("accessibility.force_disabled", 1);

// Disable Firefox View
user_pref("browser.tabs.firefox-view", false);

// 推送？
user_pref("dom.push.enabled", false);

// 用户信息收集
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// Ads
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.promo.focus.enabled", false);

// 关闭搜索框强行跳转地址栏
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// PREF: Disable sending Firefox crash reports to Mozilla servers
// A list of submitted crash reports can be found at about:crashes
user_pref("breakpad.reportURL", "");

// PREF: Disable sending reports of tab crashes to Mozilla (about:tabcrashed), don't nag user about unsent crash reports
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);

// PREF: Disable collection/sending of the health report (healthreport.sqlite*)
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// "Allow Firefox to make personalized extension recommendations"
user_pref("browser.discovery.enabled", false);

// PREF: Disable Shield/Heartbeat/Normandy (Mozilla user rating telemetry)
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.shield.optoutstudies.enabled", false);

// PREF: Disable Pocket
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", "0.0.0.0");
user_pref("extensions.pocket.loggedOutVariant", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.onSaveRecs", false);
user_pref("extensions.pocket.onSaveRecs.locales", "");
user_pref("extensions.pocket.showHome", false);
user_pref("extensions.pocket.site", "0.0.0.0");
user_pref("browser.newtabpage.activity-stream.pocketCta", "");
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("services.sync.prefs.sync-seen.services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", false);
// PREF: Disable "Recommended by Pocket" in Firefox Quantum
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.topstories", false);

// If you have a lower end machine then disabling some browser animations can be good
// user_pref("ui.prefersReducedMotion", 1);
