const SHOP_PRICE = 39.9;
const SHOP_STOCK = 100;
const quantityInput = document.querySelector("#quantity");
const orderTotal = document.querySelector("#orderTotal");
const orderForm = document.querySelector("#orderForm");
const orderSuccess = document.querySelector("#orderSuccess");
const orderSummary = document.querySelector("#orderSummary");
const payAmount = document.querySelector("#payAmount");
const copyStatus = document.querySelector("#copyStatus");
const copyWechatButton = document.querySelector("#copyWechatId");
let latestOrderText = "";

document.querySelector("#quantityMinus").addEventListener("click", () => updateQuantity(-1));
document.querySelector("#quantityPlus").addEventListener("click", () => updateQuantity(1));
quantityInput.addEventListener("input", updateTotal);

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateOrderForm()) return;

  const formData = new FormData(orderForm);
  const quantity = clampQuantity(Number(formData.get("quantity")));
  const order = {
    id: generateOrderId(),
    name: String(formData.get("name")).trim(),
    phone: String(formData.get("phone")).trim(),
    region: String(formData.get("region")).trim(),
    address: String(formData.get("address")).trim(),
    note: String(formData.get("note") || "").trim(),
    quantity,
    total: (quantity * SHOP_PRICE).toFixed(1)
  };

  latestOrderText = [
    "【母子365佩服 · 纸书订单】",
    `订单号：${order.id}`,
    "商品：《母子365佩服》一周年纪念版",
    "规格：A5 · 115页",
    `单价：¥${SHOP_PRICE.toFixed(1)}`,
    `数量：${order.quantity} 本`,
    `合计：¥${order.total}`,
    "运费：包邮",
    "",
    `收件人：${order.name}`,
    `手机：${order.phone}`,
    `地区：${order.region}`,
    `地址：${order.address}`,
    `备注：${order.note || "无"}`,
    "",
    "付款方式：微信确认付款",
    "店主微信：guiyi881841",
    `库存提示：首批 ${SHOP_STOCK} 本，以店主微信确认为准。`,
    "付款后请发送本订单号和付款截图。"
  ].join("\n");

  orderSummary.textContent = latestOrderText;
  payAmount.textContent = `¥${order.total}`;
  orderForm.hidden = true;
  orderSuccess.hidden = false;
  copyOrderText();
  orderSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.querySelector("#copyOrder").addEventListener("click", copyOrderText);
copyWechatButton.addEventListener("click", copyWechatId);

document.querySelector("#editOrder").addEventListener("click", () => {
  orderSuccess.hidden = true;
  orderForm.hidden = false;
  orderForm.querySelector("input[name='name']").focus();
});

function updateQuantity(delta) {
  quantityInput.value = clampQuantity(Number(quantityInput.value) + delta);
  updateTotal();
}

function clampQuantity(value) {
  return Math.min(5, Math.max(1, Number.isFinite(value) ? value : 1));
}

function updateTotal() {
  const quantity = clampQuantity(Number(quantityInput.value));
  quantityInput.value = quantity;
  orderTotal.textContent = `¥${(quantity * SHOP_PRICE).toFixed(1)}`;
}

function validateOrderForm() {
  let firstInvalid = null;
  for (const field of orderForm.querySelectorAll("input[required]")) {
    const invalid = !field.checkValidity();
    field.setAttribute("aria-invalid", String(invalid));
    if (invalid && !firstInvalid) firstInvalid = field;
  }

  if (firstInvalid) {
    firstInvalid.focus();
    firstInvalid.reportValidity();
    return false;
  }
  return true;
}

function generateOrderId() {
  const now = new Date();
  const date = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("");
  const suffix = String(Math.floor(1000 + Math.random() * 9000));
  return `BY${date}-${suffix}`;
}

async function copyOrderText() {
  if (!latestOrderText) return;
  try {
    await navigator.clipboard.writeText(latestOrderText);
    copyStatus.textContent = "订单已复制。请发送给店主微信确认付款。";
  } catch (error) {
    const helper = document.createElement("textarea");
    helper.value = latestOrderText;
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    const copied = document.execCommand("copy");
    helper.remove();
    copyStatus.textContent = copied
      ? "订单已复制。请发送给店主微信确认付款。"
      : "自动复制失败，请手动选择上方订单信息后复制。";
  }
}

async function copyWechatId() {
  const wechatId = "guiyi881841";
  try {
    await navigator.clipboard.writeText(wechatId);
    copyWechatButton.textContent = "微信号已复制";
  } catch (error) {
    const helper = document.createElement("textarea");
    helper.value = wechatId;
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    const copied = document.execCommand("copy");
    helper.remove();
    copyWechatButton.textContent = copied ? "微信号已复制" : "微信号：guiyi881841";
  }
  window.setTimeout(() => {
    copyWechatButton.textContent = "复制微信号";
  }, 2200);
}

updateTotal();
