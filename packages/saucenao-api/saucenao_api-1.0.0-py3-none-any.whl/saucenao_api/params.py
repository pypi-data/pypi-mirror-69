#!/usr/bin/env python
import enum


class DB(enum.auto):
    HMagazines = 0
    HGame_CG = 2
    DoujinshiDB = 3         # Not worked?
    Pixiv_Images = 5
    Nico_Nico_Seiga = 8
    Danbooru = 9
    Drawr_Images = 10
    Nijie_Images = 11
    Yandere = 12
    Openingsmoe = 13        # Not worked?
    Shutterstock = 15       # Not worked?
    FAKKU = 16
    HMisc = 18
    TwoDMarket = 19         # Not worked?
    MediBang = 20
    Anime = 21
    HAnime = 22
    Movies = 23
    Shows = 24
    Gelbooru = 25
    Konachan = 26
    SankakuChannel = 27
    AnimePicturesnet = 28   # Not worked?
    E621net = 29
    IdolComplex = 30
    Bcynet_Illust = 31
    Bcynet_Cosplay = 32
    PortalGraphicsnet = 33
    DeviantArt = 34
    Pawoonet = 35
    Madokami = 36
    MangaDex = 37
    ALL = 999


class Hide(enum.auto):
    NONE = 0
    KNOWN = 1
    SUSPECTED = 2
    ALL = 3


class Bgcolor(enum.auto):
    NONE = 'none'
    WHITE = 'white'
    BLACK = 'black'
    GREY = 'grey'


class _OutputType(enum.auto):
    HTML = 0
    XML = 1
    JSON = 2
