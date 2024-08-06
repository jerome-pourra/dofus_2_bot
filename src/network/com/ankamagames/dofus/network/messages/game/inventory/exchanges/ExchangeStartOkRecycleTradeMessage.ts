import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkRecycleTradeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1067;

	public percentToPrism: number = 0;
	public percentToPlayer: number = 0;
	public adjacentSubareaPossessed: Array<number>;
	public adjacentSubareaUnpossessed: Array<number>;

    public constructor()
    {
        super();
        this.adjacentSubareaPossessed = Array<number>();
        this.adjacentSubareaUnpossessed = Array<number>();
    }

    public getMessageId()
    {
        return ExchangeStartOkRecycleTradeMessage.protocolId;
    }

    public initExchangeStartOkRecycleTradeMessage(percentToPrism: number = 0, percentToPlayer: number = 0, adjacentSubareaPossessed: Array<number> = null, adjacentSubareaUnpossessed: Array<number> = null): ExchangeStartOkRecycleTradeMessage
    {
        this.percentToPrism = percentToPrism;
        this.percentToPlayer = percentToPlayer;
        this.adjacentSubareaPossessed = adjacentSubareaPossessed;
        this.adjacentSubareaUnpossessed = adjacentSubareaUnpossessed;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeStartOkRecycleTradeMessage(output);
    }

    public serializeAs_ExchangeStartOkRecycleTradeMessage(output: ICustomDataOutput)
    {
        if(this.percentToPrism < 0)
        {
            throw new Error("Forbidden value (" + this.percentToPrism + ") on element percentToPrism.");
        }
        output.writeShort(this.percentToPrism);
        if(this.percentToPlayer < 0)
        {
            throw new Error("Forbidden value (" + this.percentToPlayer + ") on element percentToPlayer.");
        }
        output.writeShort(this.percentToPlayer);
        output.writeShort(this.adjacentSubareaPossessed.length);
        for(var _i3: number = 0; _i3 < this.adjacentSubareaPossessed.length; _i3++)
        {
            if(this.adjacentSubareaPossessed[_i3] < 0)
            {
                throw new Error("Forbidden value (" + this.adjacentSubareaPossessed[_i3] + ") on element 3 (starting at 1) of adjacentSubareaPossessed.");
            }
            output.writeInt(this.adjacentSubareaPossessed[_i3]);
        }
        output.writeShort(this.adjacentSubareaUnpossessed.length);
        for(var _i4: number = 0; _i4 < this.adjacentSubareaUnpossessed.length; _i4++)
        {
            if(this.adjacentSubareaUnpossessed[_i4] < 0)
            {
                throw new Error("Forbidden value (" + this.adjacentSubareaUnpossessed[_i4] + ") on element 4 (starting at 1) of adjacentSubareaUnpossessed.");
            }
            output.writeInt(this.adjacentSubareaUnpossessed[_i4]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartOkRecycleTradeMessage(input);
    }

    private deserializeAs_ExchangeStartOkRecycleTradeMessage(input: ICustomDataInput)
    {
        let _val3: number = 0;
        let _val4: number = 0;
        this._percentToPrismFunc(input);
        this._percentToPlayerFunc(input);
        let _adjacentSubareaPossessedLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _adjacentSubareaPossessedLen; _i3++)
        {
            _val3 = input.readInt();
            if(_val3 < 0)
            {
                throw new Error("Forbidden value (" + _val3 + ") on elements of adjacentSubareaPossessed.");
            }
            this.adjacentSubareaPossessed.push(_val3);
        }
        let _adjacentSubareaUnpossessedLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _adjacentSubareaUnpossessedLen; _i4++)
        {
            _val4 = input.readInt();
            if(_val4 < 0)
            {
                throw new Error("Forbidden value (" + _val4 + ") on elements of adjacentSubareaUnpossessed.");
            }
            this.adjacentSubareaUnpossessed.push(_val4);
        }
    }

    private _percentToPrismFunc(input: ICustomDataInput)
    {
        this.percentToPrism = input.readShort();
        if(this.percentToPrism < 0)
        {
            throw new Error("Forbidden value (" + this.percentToPrism + ") on element of ExchangeStartOkRecycleTradeMessage.percentToPrism.");
        }
    }

    private _percentToPlayerFunc(input: ICustomDataInput)
    {
        this.percentToPlayer = input.readShort();
        if(this.percentToPlayer < 0)
        {
            throw new Error("Forbidden value (" + this.percentToPlayer + ") on element of ExchangeStartOkRecycleTradeMessage.percentToPlayer.");
        }
    }

}