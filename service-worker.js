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

var precacheConfig = [["D:/github blog/blog/public/2018/03/11/Maven/index.html","c74db0f064c705f72d0678f654166404"],["D:/github blog/blog/public/2018/03/20/MIT6.031 07/index.html","ddb73699b8f20080ed729ede0cb02e4a"],["D:/github blog/blog/public/2018/03/23/MIT6.031 13/index.html","ede674b0f588a11468d8c9634dc40510"],["D:/github blog/blog/public/2018/04/03/time- 2018-4-3/index.html","248491b532efb5a5b69963f56ec4c09e"],["D:/github blog/blog/public/2018/06/03/记几个Lab过程中的bug/index.html","c32a37fdc24b198df8296165eb83bd70"],["D:/github blog/blog/public/2018/06/18/浅谈Java中的Dispatch(分派)和Binding(绑定)/index.html","cdd4711ad65c0a311fd16278401c3910"],["D:/github blog/blog/public/2018/06/19/5个SOLID设计原则和GRASP/index.html","2271531277aaaf18f31f7dc07f16955b"],["D:/github blog/blog/public/2018/06/19/面向复用的设计模式/index.html","6b3afb43a7a650f28905f26df9d98442"],["D:/github blog/blog/public/2018/06/21/面向可维护性的设计模式/index.html","2828c9368ad284102146a94b171397b2"],["D:/github blog/blog/public/2018/06/22/Java中的垃圾回收/index.html","4baee3e171f699c05a07c83226b57247"],["D:/github blog/blog/public/2018/09/04/遗传算法(GA)/index.html","61d5269d0d40c0747d63961375edd180"],["D:/github blog/blog/public/2018/09/12/机器学习——决策树/index.html","5661f815c3bc674d1832195684d869b2"],["D:/github blog/blog/public/about/index.html","e0106719709786a0885c367d943a07f3"],["D:/github blog/blog/public/android-chrome-192x192.png","200fa3a63376abf62b132930e4b69887"],["D:/github blog/blog/public/android-chrome-512x512.png","f57dbc6c08eec6e382f3e2438b9a2fa8"],["D:/github blog/blog/public/apple-touch-icon.png","8e314cc5edb8b956fe5bfd10f3077af4"],["D:/github blog/blog/public/archives/2018/03/index.html","d94d920ec41eab2d26b0a3cf2324f8cd"],["D:/github blog/blog/public/archives/2018/04/index.html","c2b9fc7f75d5e7a5129fa39de26971e5"],["D:/github blog/blog/public/archives/2018/06/index.html","9d8003f5a8c71c35fc7a61bae219b9a4"],["D:/github blog/blog/public/archives/2018/09/index.html","5aa1d5d450b75f8cdd108c7899c5c11c"],["D:/github blog/blog/public/archives/2018/index.html","b7deadcb29d7a21ca801b2f91bd976a3"],["D:/github blog/blog/public/archives/2018/page/2/index.html","e742a6b35ceae39c437e2d85715476c9"],["D:/github blog/blog/public/archives/index.html","a8fc409911b9b75397ec0be98fd9c832"],["D:/github blog/blog/public/archives/page/2/index.html","bc9e15785b1c5b8e64e5dc8f3bd5f891"],["D:/github blog/blog/public/assets/algolia/algoliasearch.js","10f193c736da22e68ae04071e63abca5"],["D:/github blog/blog/public/assets/algolia/algoliasearch.min.js","38cf576ec8db1585f01ff30665555274"],["D:/github blog/blog/public/assets/algolia/algoliasearchLite.js","e8866a1504bad32726ca59b7ac455040"],["D:/github blog/blog/public/assets/algolia/algoliasearchLite.min.js","af3228760fa9c2910e17faef510b5c32"],["D:/github blog/blog/public/categories/Java/index.html","22f8da19413d236f1299f80c08e85a95"],["D:/github blog/blog/public/categories/MIT/index.html","98c65f4b759259ff3b096003f301d972"],["D:/github blog/blog/public/categories/Tool/index.html","28dc08a7b6f2e75c8938b3bea1b29117"],["D:/github blog/blog/public/categories/index.html","6700a71470d9c19b4507f87051339cd4"],["D:/github blog/blog/public/categories/数学建模/index.html","0512d3d1aca0050f2af76f6394846ed8"],["D:/github blog/blog/public/css/index.css","927936216d37d27e53084dde4b97f4d2"],["D:/github blog/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/github blog/blog/public/favicon-16x16.png","5e97a8144b252a4a9ae03e34d04c5ea1"],["D:/github blog/blog/public/favicon-32x32.png","c2c78be6e155b93de9e8b748061025c6"],["D:/github blog/blog/public/google5234a7c749ca53b4.html","1e198cae4d7c3005998da1f7dc829e3d"],["D:/github blog/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/github blog/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/github blog/blog/public/index.html","f76ce3e0024606a5b55e5d1c8e297679"],["D:/github blog/blog/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["D:/github blog/blog/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["D:/github blog/blog/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["D:/github blog/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/github blog/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/github blog/blog/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["D:/github blog/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/github blog/blog/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["D:/github blog/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/github blog/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/github blog/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/github blog/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/github blog/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/github blog/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/github blog/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/github blog/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/github blog/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/github blog/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/github blog/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/github blog/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/github blog/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/github blog/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/github blog/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/github blog/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/github blog/blog/public/mstile-150x150.png","2e43e35c21e212b393b9e1382a152b22"],["D:/github blog/blog/public/page/2/index.html","874fb7752697dd65fb1be056350fbd41"],["D:/github blog/blog/public/safari-pinned-tab.svg","415c624916e9f2c1482289fd7bc467a1"],["D:/github blog/blog/public/slides/index.html","5a11cda6adb1665c47a736ef163b958b"],["D:/github blog/blog/public/tags/Java/index.html","58d5882ddcf580bb033b40a095ef4ee9"],["D:/github blog/blog/public/tags/MIT讲义/index.html","e7317a1f6c2f4d7107ee6471cbac4762"],["D:/github blog/blog/public/tags/Maven/index.html","60485ddd3a27924572aab431a1705c08"],["D:/github blog/blog/public/tags/index.html","02f7db10db4ce438fe7e56bf76b2096f"],["D:/github blog/blog/public/tags/数学建模/index.html","293b8b8d4e4fab5c8dee7b15cd9cf472"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







