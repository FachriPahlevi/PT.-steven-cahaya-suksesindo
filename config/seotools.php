<?php


/**
 * @see https://github.com/artesaos/seotools
 */

        return [
            'inertia' => env('SEO_TOOLS_INERTIA', false),
            'meta' => [
                /*
                * The default configurations to be used by the meta generator.
                */
            'defaults' => [
            'title'        => "PT. Steven Cahaya SuksesIndo", 
            'titleBefore'  => false, 
            'description'  => 'Perusahaan pemasok batu alam berkualitas tinggi di Indonesia',
            'separator'    => ' - ',
            'keywords'     => ['batu alam', 'pemasok batu', 'kualitas tinggi'],
            'canonical'    => null, // Menggunakan URL halaman saat ini
            'url'         => null,
            'robots'       => 'index,follow',
        ],

        /*
         * Webmaster tags are always added.
         */
'webmaster_tags' => [
    'google'    => 'google-site-verification-code',
    'bing'      => 'bing-site-verification-code',
    'alexa'     => 'alexa-site-verification-code',
    'pinterest' => 'pinterest-site-verification-code',
    'yandex'    => 'yandex-site-verification-code',
    'norton'    => 'norton-site-verification-code',
],


        'add_notranslate_class' => false,
    ],
    'opengraph' => [
        /*
         * The default configurations to be used by the opengraph generator.
         */
        'defaults' => [
        'title'       => 'PT. Steven Cahaya SuksesIndo - Pemasok Batu Alam Berkualitas', 
        'description' => 'Menawarkan berbagai pilihan batu alam berkualitas tinggi untuk proyek Anda.',
        'url'         => null,
        'type'        => 'website',
        'site_name'   => 'PT. Steven Cahaya SuksesIndo',
        'images'      => ['https://stevencahayasuksesindo.com/img/Logo/logo_sc.png'],
    ],

    ],
    'twitter' => [
        /*
         * The default values to be used by the twitter cards generator.
         */
        'defaults' => [
            //'card'        => 'summary',
            //'site'        => '@LuizVinicius73',
        ],
    ],
    'json-ld' => [
        /*
         * The default configurations to be used by the json-ld generator.
         */
     'defaults' => [
    'title'       => 'PT. Steven Cahaya SuksesIndo - Pemasok Batu Alam Berkualitas',
    'description' => 'Menawarkan berbagai jenis batu alam berkualitas untuk berbagai kebutuhan proyek.',
    'url'         => null,
    'type'        => 'WebPage',
    'images'      => ['https://stevencahayasuksesindo.com/img/Logo/logo_sc.png'],
],
    ],
];
