/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/github blog/blog/public/2018/03/06/iframe/index.html","0db83058922839c8c7712b67b14f2cab"],["D:/github blog/blog/public/2018/03/11/Maven/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/github blog/blog/public/2018/03/20/MIT6.031 07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/github blog/blog/public/2018/03/23/MIT6.031 13/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/github blog/blog/public/2018/04/03/time- 2018-4-3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/github blog/blog/public/2018/06/03/记几个Lab过程中的bug/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/github blog/blog/public/2018/06/18/浅谈Java中的Dispatch(分派)和Binding(绑定)/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/github blog/blog/public/2018/06/19/5个SOLID设计原则和GRASP/index.html","603d21e6a0bcb004bac373a34413fdfb"],["D:/github blog/blog/public/2018/06/19/面向复用的设计模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/github blog/blog/public/2018/06/21/面向可维护性的设计模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/github blog/blog/public/2018/06/22/Java中的垃圾回收/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/github blog/blog/public/about/index.html","cd835da5a5550d36a43deeda29563f0c"],["D:/github blog/blog/public/android-chrome-192x192.png","200fa3a63376abf62b132930e4b69887"],["D:/github blog/blog/public/android-chrome-512x512.png","f57dbc6c08eec6e382f3e2438b9a2fa8"],["D:/github blog/blog/public/apple-touch-icon.png","8e314cc5edb8b956fe5bfd10f3077af4"],["D:/github blog/blog/public/archives/2018/03/index.html","16a7bac3a686b5e44b664e924bf1c67c"],["D:/github blog/blog/public/archives/2018/04/index.html","f978cd01476a6866463334b3f6357b15"],["D:/github blog/blog/public/archives/2018/06/index.html","1576be4a6e48b557268f36c56dc48d84"],["D:/github blog/blog/public/archives/2018/index.html","9538f3e5bfb8f7abb2576cf0fe601d26"],["D:/github blog/blog/public/archives/2018/page/2/index.html","0b4928a31866dfa0e493ee2934c96375"],["D:/github blog/blog/public/archives/index.html","1ad781f43b33fd2a5ac3f9f3ca07da35"],["D:/github blog/blog/public/archives/page/2/index.html","becaf3d7b3c906218c30061cf0489826"],["D:/github blog/blog/public/categories/Java/index.html","49fea8fd1f4f7e5922873102dc930933"],["D:/github blog/blog/public/categories/MIT/index.html","1c0597c9ae58c94eb208690aa8e6d4f6"],["D:/github blog/blog/public/categories/Tool/index.html","d2a432f5cd71a0e07b4e19267619bd16"],["D:/github blog/blog/public/categories/index.html","d07808ce722bd0d496a38eb826f635d8"],["D:/github blog/blog/public/css/index.css","b85e065af72fd3ba912d065cbf957f94"],["D:/github blog/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/github blog/blog/public/favicon-16x16.png","5e97a8144b252a4a9ae03e34d04c5ea1"],["D:/github blog/blog/public/favicon-32x32.png","c2c78be6e155b93de9e8b748061025c6"],["D:/github blog/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/github blog/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/github blog/blog/public/index.html","1cf95c5db1dfa163ba7b2d664e2efbed"],["D:/github blog/blog/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["D:/github blog/blog/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["D:/github blog/blog/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["D:/github blog/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/github blog/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/github blog/blog/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["D:/github blog/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/github blog/blog/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["D:/github blog/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/github blog/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/github blog/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/github blog/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/github blog/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/github blog/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/github blog/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/github blog/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/github blog/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/github blog/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/github blog/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/github blog/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/github blog/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/github blog/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/github blog/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/github blog/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/github blog/blog/public/mstile-150x150.png","2e43e35c21e212b393b9e1382a152b22"],["D:/github blog/blog/public/page/2/index.html","d230575269a6705636faf4a0ff9021bb"],["D:/github blog/blog/public/safari-pinned-tab.svg","415c624916e9f2c1482289fd7bc467a1"],["D:/github blog/blog/public/slides/index.html","788e34131b5d9f1fa7234d9ea81b7537"],["D:/github blog/blog/public/tags/Java/index.html","77c776c1af8881f79821766b5dd7ea94"],["D:/github blog/blog/public/tags/MIT讲义/index.html","6178a8182fc5ae3b027db4410a655e3b"],["D:/github blog/blog/public/tags/Maven/index.html","f4200c9dfcc641f406034f0eb838168b"],["D:/github blog/blog/public/tags/index.html","bc7ec15472c6b723671a1c0b383e7304"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







