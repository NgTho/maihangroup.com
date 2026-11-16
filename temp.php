<?php
$images = array_filter([
    $data['images_b'],
    $data['images_s'],
    $data['images_s2'],
    $data['images_s3'],
    $data['images_s4'],
    $data['images_s5'],
    $data['images_s6'],
    $data['images_s7'],
]);
?>
<div class="product_detail">
    <input type="hidden" id="pname" value="<?php echo $info['pname'] ?>">
    <input type="hidden" id="idproduct" value="<?php echo $data['idproduct'] ?>">
    <input type="hidden" id="pprice" value="<?php echo $data['pprice'] ?>">
    <input type="hidden" id="pprice_down" value="<?php echo $data['pprice_down'] ?>">
    <input type="hidden" id="time_start" value="<?php echo $data['time_start'] ?>">
    <input type="hidden" id="time_end" value="<?php echo $data['time_end'] ?>">
    <input type="hidden" id="num_required" value="<?php echo $data['num_required'] ?>">
    <input type="hidden" id="url_current" value="<?php echo 'https://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'] ?>">
    <input type="hidden" id="alias" value="<?php echo $data['p_alias'] ?>">
    <div class="top_1">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div>
                        <ol class="breadcrumb d-desktop">
                            <li><a href="<?= ROOT_URL ?>" class="t_1">Trang chủ</a></li>
                            <li><a href="<?= ROOT_URL ?>san-pham" class="t_1">Sản phẩm</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="top_2">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                    <div class="carousel_3">
                        <div class="owl-carousel owl-theme">
                            <?php foreach ($images as $i => $img) { ?>
                                <div class="item">
                                    <img data-src="<?php echo $img; ?>" alt="<?php echo $info['pname']; ?>" title="<?php echo $info['pname']; ?>" class="img-responsive owl-lazy<?php echo $i === 0 ? ' rsImg' : ''; ?>">
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                    <div class="carousel_4">
                        <div class="owl-carousel owl-theme">
                            <?php foreach ($images as $i => $img) { ?>
                                <div class="item">
                                    <img data-src="<?php echo $img; ?>" alt="<?php echo $info['pname']; ?>" title="<?php echo $info['pname']; ?>" class="img-responsive owl-lazy<?php echo $i === 0 ? ' rsImg' : ''; ?>">
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                    <h1 class="t_0 "><b class="rsName"><?php echo $info['pname']; ?></b></h1>
                    <?php
                    if ($data['pdescription'] != '') {
                    ?>
                        <?php echo $data['pdescription']; ?>
                    <?php
                    }
                    ?>
                    <?php if ($data['mota_km']) { ?>
                        <div class="bl_1 advantage">
                            <p><b>Ưu điểm:</b></p>
                            <div class="d_1"><?= preg_replace('/<p>\s*&nbsp;\s*<\/p>/', '', $data['mota_km']) ?></div>
                        </div>
                    <?php } ?>
                    <div class="bl_2 d-flex-end rsCost">
                        <?php if ($info['isSale'] == 'true' && $info['check_size'] == 0) { ?>
                            <p class="t_1"><?php echo number_format($data['pprice'], 0, ',', '.') . 'đ'; ?></p>
                        <?php } ?>
                        <p class="t_2"><?= $data['het_hang'] == 2 ? 'Sắp mở bán' : $info['price'] ?></p>
                        <?php if ($info['isSale'] == 'true') { ?>
                            <p class="t_3 polygon"><?php echo $info['discount']; ?>%</p>
                        <?php } ?>
                    </div>
                    <div class="bl_2 d-flex" id="view-rating">
                        <input type="hidden" class="rating_detail" value="<?= $data['vote_avg'] ?>"
                            data-filled="fas fa-star" data-empty="far fa-star" />
                        <p class="t_4">| <?php echo $data['vote_reviewcount'] ?> đánh giá</p>
                    </div>
                    <form>
                        <div class="form-group capacity">
                            <p class="text_4"><b>Dung tích: </b></p>
                            <div class="block_variation"><?php echo $info['size']; ?></div>
                        </div>
                        <a class="reset" href="#" id="clear" style="display: none;">Clear</a>
                    </form>
                    <div id="gift">
                        <?php if ($info['check_size'] === 0 && $info['promotion_gift'] == 1) { ?>
                            <div class="bl_gift">
                                <div class="bl_hr"></div>
                                <svg class="img_3" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 12" fill="none">
                                    <path d="M11.8067 0.273334L11.7267 0.193334C11.599 0.0715112 11.4299 0.00245608 11.2534 4.19205e-07H5.95337C5.59801 -0.000281167 5.25724 0.141307 5.00671 0.393334L0.193374 5.20667C-0.0651089 5.46669 -0.0651089 5.88664 0.193374 6.14667L5.85337 11.8067C6.1134 12.0651 6.53335 12.0651 6.79337 11.8067L11.6067 6.99333C11.8587 6.7428 12.0003 6.40203 12 6.04667V0.746667C11.9976 0.570156 11.9285 0.40109 11.8067 0.273334ZM8.66671 4.66667C7.93033 4.66667 7.33337 4.06971 7.33337 3.33333C7.33337 2.59695 7.93033 2 8.66671 2C9.40309 2 10 2.59695 10 3.33333C10 3.68696 9.85956 4.02609 9.60952 4.27614C9.35947 4.52619 9.02033 4.66667 8.66671 4.66667Z" fill="#16703A" />
                                </svg>
                                <p>Quà tặng
                                    kèm <?php if ($data['type_promotion'] == 2) echo 'ngẫu nhiên ' . $data['num_random'] . '/' . $info['promotion_count'] . ' các sản phẩm sau' ?>
                                    <?php if ($data['num_required'] > 1) :  ?>
                                        ( khi mua <?= $data['num_required'] ?> sản phẩm )
                                    <?php endif; ?>
                                </p>

                                <?php
                                $i = 0;
                                while ($row = $db->fetchAssoc($promotion_result)) {
                                    $img = $product->resizeImg($row['images_b'], 284, 284);
                                    $idproduct = $data['idproduct'];
                                    $idpromotion = $row['idproduct'];
                                    $check = $db->query("SELECT * FROM `quantity` WHERE `idproduct`=$idproduct AND `idpromotion`=$idpromotion");
                                    $check_row = $db->fetchAssoc($check);

                                    if ($check_row['quantity'] == 1) {
                                        $quantity = '';
                                    } else {
                                        $quantity = $check_row['quantity'] . ' ';
                                    }
                                    if (!$check_row['quantity']) {
                                        $check_row['quantity'] = 1;
                                    }
                                ?>
                                    <?php
                                    if ($info['promotion_count'] > 1 && $data['type_promotion'] == 0) {
                                        if ($i == 0 && !isset($_SESSION['promo_id'][$data['idproduct']])) {
                                            $_SESSION['promo_id'][$data['idproduct']] = $row['idproduct'];
                                            //$_SESSION['promo_id']['promotion_id'] = $row['idproduct'];
                                        }
                                        $i++;
                                    ?>
                                        <div class="radio">
                                            <input type="radio" name="promotion" id="<?php echo $row['pname']; ?>" data-id="<?php echo $row['idproduct']; ?>" <?php if ($_SESSION['promo_id'][$data['idproduct']] == $row['idproduct']) echo 'checked="checked"'; ?>>
                                            <label for="<?php echo $row['pname']; ?>" class="bl_gift_item">
                                                <div class="check"></div>
                                                <img alt="<?php echo $row['pname']; ?>" title="<?php echo $row['pname']; ?>" src="<?php echo $img; ?>" class="img-responsive img_4">
                                                <div class="left_prom">
                                                    <p><?php echo $quantity . word_limiter($row['pname'], 20) ?></p>
                                                    <p><span class="t_10">Trị giá:</span><span class="t_11"><?php echo number_format($row['pprice'] * $check_row['quantity']); ?></span>
                                                    </p>
                                                </div>
                                            </label>
                                        </div>

                                    <?php
                                    } else {
                                    ?>
                                        <div class="bl_gift_item">
                                            <img alt="<?php echo $row['pname']; ?>" title="<?php echo $row['pname']; ?>" src="<?php echo $img; ?>" class="img-responsive img_4">
                                            <div class="left_prom">
                                                <p><?php echo $quantity . word_limiter($row['pname'], 20) ?></p>
                                                <p><span class="t_10">Trị giá:</span><span class="t_11"><?php echo number_format($row['pprice'] * $check_row['quantity']); ?></span>
                                                </p>
                                            </div>
                                        </div>
                                    <?php
                                    }
                                    ?>
                                <?php
                                }
                                ?>
                            </div>
                        <?php } ?>
                    </div>
                    <?php if ($attach_result != FALSE) { ?>
                        <div id="combo">
                            <div class="bl_hr"></div>
                            <svg class="img_3" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 12" fill="none">
                                <path d="M11.8067 0.273334L11.7267 0.193334C11.599 0.0715112 11.4299 0.00245608 11.2534 4.19205e-07H5.95337C5.59801 -0.000281167 5.25724 0.141307 5.00671 0.393334L0.193374 5.20667C-0.0651089 5.46669 -0.0651089 5.88664 0.193374 6.14667L5.85337 11.8067C6.1134 12.0651 6.53335 12.0651 6.79337 11.8067L11.6067 6.99333C11.8587 6.7428 12.0003 6.40203 12 6.04667V0.746667C11.9976 0.570156 11.9285 0.40109 11.8067 0.273334ZM8.66671 4.66667C7.93033 4.66667 7.33337 4.06971 7.33337 3.33333C7.33337 2.59695 7.93033 2 8.66671 2C9.40309 2 10 2.59695 10 3.33333C10 3.68696 9.85956 4.02609 9.60952 4.27614C9.35947 4.52619 9.02033 4.66667 8.66671 4.66667Z" fill="#16703A" />
                            </svg>
                            <p>MUA KÈM DEAL SỐC</p>
                            <div class="bl_checkbox">
                                <div class="checkbox-wrap">
                                    <label class="checkbox">
                                        <input type="checkbox" disabled class="combo-checkbox" value="<?php echo $data['idproduct']; ?>" name="combo[]" checked="" readonly="" data-price="<?php echo $info['priceNum']; ?>" data-price-org="<?= $info['priceOrg'] ?>">
                                        <span class="ico"></span>
                                    </label>
                                </div>
                                <label>
                                    <div class="check"></div>
                                    <img alt="<?php echo $info['pname']; ?>" title="<?php echo $info['pname']; ?>" src="<?php echo $data['images_b']; ?>" class="img-responsive img_4">
                                    <p><?= $info['pname'] ?></p>

                                    <p><span class="t_10">Trị giá:</span><span class="t_11"><?php echo $info['price']; ?><span class="t_12"><?php if ($info['isSale'] == 'true') echo number_format($data['pprice'], 0, ',', '.') . 'đ'; ?></span></span></p>
                                </label>
                            </div>
                            <?php
                            $i = 0;
                            while ($row = $db->fetchAssoc($attach_result)) {
                            ?>
                                <?php
                                $info_dt = $product->getInfoDetailProduct($row['idproduct'], true);
                                ?>
                                <div class="bl_checkbox">
                                    <div class="checkbox-wrap">
                                        <label class="checkbox">
                                            <input type="checkbox" class="combo-checkbox" value="<?php echo $row['idproduct']; ?>" name="combo[]" checked="" readonly="" data-price="<?= $info_dt['priceNum'] ?>" data-price-org="<?= $info_dt['priceOrg'] ?>">
                                            <span class="ico"></span>
                                        </label>
                                    </div>
                                    <label for="<?php echo $row['p_alias']; ?>">
                                        <div class="check"></div>
                                        <img alt="<?php echo $row['pname']; ?>" title="<?php echo $row['pname']; ?>" src="<?= $info_dt['img'] ?>" class="img-responsive img_4">
                                        <p><?= $info_dt['pname'] ?></p>

                                        <p><span class="t_10">Trị giá:</span><span class="t_11"><?= $info_dt['price'] ?></span><span class="t_12"><?php if ($info_dt['isSale'] == 'true') echo number_format($row['pprice'], 0, ',', '.') . 'đ'; ?></span>
                                        </p>
                                    </label>
                                </div>
                            <?php
                            }
                            ?>
                            <p class="total">Tổng tiền: <span class="t_11"></span><span class="t_12"></span></p>
                            <button class="add_combo" type="button">Thêm <span class="counter"></span> sản phẩm
                                vào giỏ hàng
                            </button>
                        </div>
                    <?php } ?>
                    <div class="bl_2 bl_3 d-flex">
                        <a href="javascript:void(0);" class="add_to_cart addToCart" data-id="<?php echo $data['idproduct'] ?>" data-num="1">
                            <div class="btn_1 d-flex">
                                <span>Thêm vào giỏ hàng</span>
                            </div>
                        </a>
                        <a href="<?= ROOT_URL . 'gio-hang/' . $data['idproduct']; ?>" class="btnBuyNow" id="buyNow">
                            <div class="btn_1 btn_2 d-flex">
                                <span>Mua ngay</span>
                            </div>
                        </a>

                        <div class="btn_1 btn_2 d-flex outStock" style="display: none;">
                            <p></p>
                        </div>

                    </div>



                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <hr>
                </div>
            </div>
        </div>
    </div>
    <div class="top_3">
        <div class="container pcontent">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <?php echo $product->renderContent($data['pcontent']); ?>

                </div>
            </div>
        </div>
    </div>
    <?php 
    $faq = $data['faq'];
    if (!empty($faq)) {
        $dom = new DOMDocument();
        @$dom->loadHTML('<?xml encoding="utf-8" ?>' . $faq, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
        $xpath = new DOMXPath($dom);
        $h2List = $xpath->query('//h2');

        if ($h2List && $h2List->length > 0) {
    ?>
    <div class="faq">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <picture>
                        <source media="(max-width: 767px)" srcset="<?= ROOT_URL . TEMPLATE_PATH ?>/images/faq_1m.png">
                        <img src="<?= ROOT_URL . TEMPLATE_PATH ?>/images/faq_1.png" alt="img" title="img" class="img-responsive img_1">
                    </picture>
                </div>
                <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                    <div class="panel-group" id="accordion">
                        <?php
                        foreach ($h2List as $index => $h2) {
                            $question = trim($h2->textContent);
                            
                            $answerHtml = '';
                            $next = $h2->nextSibling;
                            while ($next && $next->nodeName !== 'h2') {
                                $answerHtml .= $dom->saveHTML($next);
                                $next = $next->nextSibling;
                            }
                            
                            $collapseId = 'collapse' . ($index + 1);
                            ?>
                            <div class="panel panel-default">
                                <div class="panel-heading collapsed" data-toggle="collapse" data-target="#<?= $collapseId ?>"
                                    data-parent="#accordion" aria-expanded="false">
                                    <p class="panel-title"><?= $question ?>
                                        <i class="fas fa-plus" aria-hidden="true"></i>
                                    </p>
                                </div>
                                <div id="<?= $collapseId ?>" class="panel-collapse collapse">
                                    <div class="panel-body"><?= trim($answerHtml) ?></div>
                                </div>
                            </div>
                            <?php
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php 
        }
    }
    ?>
</div>